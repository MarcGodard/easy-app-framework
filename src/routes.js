import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import NotFoundPage from './components/pages/NotFoundPage'
import PanelLeftMenu from './components/modals/PanelLeft'
import LoginScreen from './components/modals/LoginScreen'
import SignUp from './components/modals/SignUp'
import Popup from './components/modals/Popup'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/panel-left/',
    panel: {
      component: PanelLeftMenu
    }
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/login/',
    loginScreen: {
      component: LoginScreen
    }
  },
  {
    path: '/sign-up/',
    popup: {
      component: SignUp
    }
  },
  {
    path: '/popup/',
    popup: {
      component: Popup
    }
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
]
