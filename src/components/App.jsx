import React from 'react'
import { Provider } from 'react-redux'
import { App, View, Statusbar } from 'framework7-react'

import routes from '../router/'
import { store, stateKernel, persistor } from '../store/'
import { PersistGate } from 'redux-persist/integration/react'

// Framework7 parameters here
const f7params = {
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes,
  // App Framework7 Redux state kernel
  stateKernel,
  // Disable F7 automated routing for Links
  clicks: {
    externalLinks: 'a[href="#"]'
  },
  // Disable F7 automated routing for backdrops
  panel: {
    closeByBackdropClick: false
  },
  popup: {
    closeByBackdropClick: false
  }
}

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App params={f7params}>
          <Statusbar />
          <View id='main-view' url='/' main className='ios-edges' />
        </App>
      </PersistGate>
    </Provider>
  )
}
