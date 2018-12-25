import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Framework7StateKernel, framework7Reducer, syncFramework7WithStore } from 'framework7-redux'
import middleware from './middleware'
import rootReducer from './reducers.js'

// Framework7 state kernel
export const stateKernel = new Framework7StateKernel()

// configure persistent store
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer))

export const store = createStore(
  combineReducers({
    framework7: framework7Reducer, // keep this reducer out of persisted store
    persistedReducer
  }),
  applyMiddleware(...middleware)
)

export const persistor = persistStore(store)

syncFramework7WithStore(store, stateKernel)
