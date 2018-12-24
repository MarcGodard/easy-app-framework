import reduxThunk from 'redux-thunk'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import logger from './logger'

export default [
  reduxThunk, // Thunk middleware for Redux
  reduxPromiseMiddleware(), // Resolve, reject promises with conditional optimistic updates
  logger, // A basic middleware logger
]