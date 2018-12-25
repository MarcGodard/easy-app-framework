import { combineReducers } from 'redux'
import { feathersAuthentication, services } from './feathers.js'

export default combineReducers({
  auth: feathersAuthentication.reducer,
  users: services.users.reducer
})
