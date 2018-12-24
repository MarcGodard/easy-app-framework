import reduxThunk from 'redux-thunk'
import reduxMulti from 'redux-multi'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import logger from './logger'

export default [
  reduxThunk, // Thunk middleware for Redux
  reduxMulti, // Dispatch multiple actions
  reduxPromiseMiddleware(), // Resolve, reject promises with conditional optimistic updates
  logger, // A basic middleware logger
]