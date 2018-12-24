import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Framework7StateKernel, framework7Reducer, syncFramework7WithStore } from 'framework7-redux'
import middleware from '../middleware'

// feathers imports
import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import RealTime from 'feathers-offline-realtime'
import reduxifyServices from 'feathers-redux'
import reduxifyAuthentication from 'feathers-reduxify-authentication'

// setup feathers
const socket = io('http://localhost:3030')
const feathersClient = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.authentication({
    storage: window.localStorage
  }))

// Reduxify feathers-authentication
const feathersAuthentication = reduxifyAuthentication(feathersClient,
  { isUserAuthorized: (user) => user.isVerified } // user must be verified to authenticate
)

// Create Redux actions and reducers for Feathers services
const services = reduxifyServices(feathersClient, ['users'])

export const stateKernel = new Framework7StateKernel()

// Configure realtime & connect it to services
const users = feathersClient.service('/users')
const usersRealtime = new RealTime(users, {})

usersRealtime.on('events', (records, last) => {
  store.dispatch(services.users.store({ connected: usersRealtime.connected, last, records }))
})

// Enable realtime. It will start with a snapshot.
usersRealtime.connect()
  .then(() => console.log('RealTime replication started'))

export const store = createStore(
  combineReducers({
    framework7: framework7Reducer,
    auth: feathersAuthentication.reducer,
    users: services.users.reducer
  }),
  applyMiddleware(...middleware)
)

syncFramework7WithStore(store, stateKernel)
