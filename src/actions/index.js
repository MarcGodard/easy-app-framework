import { goBack, navigateTo } from 'framework7-redux'

export const goBackNav = () => goBack()
export const goAboutNav = () => navigateTo('/about/')
export const goHomeNav = () => navigateTo('/')
export const openLogin = () => navigateTo('/login/')
export const openSignUp = () => navigateTo('/sign-up/')
export const openPanelLeft = () => navigateTo('/panel-left/')

export const menuToAboutNav = () => {
  return (dispatch) => {
    dispatch(goBackNav())
    dispatch(goAboutNav())
  }
}

export const menuToHomeNav = () => {
  return (dispatch) => {
    dispatch(goBackNav())
    dispatch(goHomeNav())
  }
}

export const menuToLoginNav = () => {
  return (dispatch) => {
    dispatch(goBackNav())
    dispatch(openLogin())
  }
}

export const menuToSignUpNav = () => {
  return (dispatch) => {
    dispatch(goBackNav())
    dispatch(openSignUp())
  }
}
