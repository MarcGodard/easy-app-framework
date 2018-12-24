import { connect } from 'react-redux'

import HomePage from '../components/pages/HomePage'
import { navigateTo } from 'framework7-redux/dist/index'

export const goToDefaultRoute = () => navigateTo('/load-something-that-doesnt-exist/')
export const goToAbout = () => navigateTo('/about/')
export const openPanelLeft = () => navigateTo('/panel-left/')
export const openLogin = () => navigateTo('/login/')
export const openPopup = () => navigateTo('/popup/')

const mapDispatchToProps = (dispatch) => {
  return {
    onGoToAbout: () => dispatch(goToAbout()),
    onGoToDefaultRoute: () => dispatch(goToDefaultRoute()),
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
    onOpenPopup: () => dispatch(openPopup()),
    onOpenLoginScreen: () => dispatch(openLogin())
  }
}

export default connect(null, mapDispatchToProps)(HomePage)
