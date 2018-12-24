import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Framework7StateKernel, framework7Reducer, syncFramework7WithStore } from 'framework7-redux'
import middleware from '../middleware'

// feathers imports
import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import reduxifyServices from 'feathers-redux'

// Reducer imports
import loginReducer from '../reducers/LoginReducer'

// setup feathers
const socket = io('http://localhost:3030');
const feathersClient = feathers()

feathersClient.configure(feathers.socketio(socket))
feathersClient.configure(feathers.authentication({
  storage: window.localStorage
}))

// Create Redux actions and reducers for Feathers services
const services = reduxifyServices(feathersClient, ['users'])

export const stateKernel = new Framework7StateKernel()

export const store = createStore(
  combineReducers({
    framework7: framework7Reducer,
    users: services.users.reducer,
    login: loginReducer
  }),
  applyMiddleware(...middleware)
)

syncFramework7WithStore(store, stateKernel)
