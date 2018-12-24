import HomeContainer from '../containers/HomeContainer'
import AboutContainer from '../containers/AboutContainer'
import FormContainer from '../containers/FormContainer'
import DynamicRouteContainer from '../containers/DynamicRouteContainer'
import NotFoundContainer from '../containers/DefaultRouteContainer'
import PanelLeftContainer from '../containers/PanelLeftContainer'
import LoginScreen from '../components/modals/LoginScreen'
import PopupContainer from '../containers/PopupContainer'

export default [
  {
    path: '/',
    component: HomeContainer
  },
  {
    path: '/panel-left/',
    panel: {
      component: PanelLeftContainer
    }
  },
  {
    path: '/about/',
    component: AboutContainer
  },
  {
    path: '/form/',
    component: FormContainer
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRouteContainer
  },
  {
    path: '/login/',
    loginScreen: {
      component: LoginScreen
    }
  },
  {
    path: '/popup/',
    popup: {
      component: PopupContainer
    }
  },
  {
    path: '(.*)',
    component: NotFoundContainer
  }
]
