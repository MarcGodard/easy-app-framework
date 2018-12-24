import { goBack, navigateTo } from 'framework7-redux'

export const goBackNav = () => goBack()
export const goAboutNav = () => navigateTo('/about/')
export const openPanelLeft = () => navigateTo('/panel-left/')
export const goHomeNav = () => navigateTo('/')
