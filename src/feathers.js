import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import reduxifyServices from 'feathers-redux'
import reduxifyAuthentication from 'feathers-reduxify-authentication'

// setup feathers
const socket = io('http://localhost:3030')
export const feathersClient = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.authentication({
    storage: window.localStorage
  }))

// Reduxify feathers-authentication
export const feathersAuthentication = reduxifyAuthentication(feathersClient,
  { isUserAuthorized: (user) => user.isVerified } // user must be verified to authenticate
)

// Create Redux actions and reducers for Feathers services
export const services = reduxifyServices(feathersClient, ['users'])
