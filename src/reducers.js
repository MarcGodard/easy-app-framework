import { feathersAuthentication, services } from './feathers.js'

export default {
  auth: feathersAuthentication.reducer,
  users: services.users.reducer
}
