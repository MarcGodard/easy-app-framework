import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Page, Navbar, List, ListItem } from 'framework7-react'
import { goBackNav, menuToAboutNav, menuToLoginNav } from '../../actions'
import { feathersAuthentication } from '../../store'

class PanelLeft extends Component {
  render () {
    const { onGoToAbout, onGoToLogin, onClosePanelLeft, onLogout, isAuthenticated } = this.props
    let authMenu

    if (isAuthenticated) {
      authMenu = <ListItem link title='Logout' onClick={onLogout} />
    } else {
      authMenu = <ListItem link title='Login' onClick={onGoToLogin} />
    }

    return (
      <Panel left cover themeDark onPanelBackdropClick={onClosePanelLeft}>
        <Page>
          <Navbar title='Menu' />
          <List>
            <ListItem link title='About' onClick={onGoToAbout} />
          </List>
          <List>
            {authMenu}
          </List>
        </Page>
      </Panel>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxState: state,
  isAuthenticated: state.auth && state.auth.isSignedIn
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelLeft: () => dispatch(goBackNav()),
    onGoToAbout: () => dispatch(menuToAboutNav()),
    onGoToLogin: () => dispatch(menuToLoginNav()),
    onLogout: () => {
      dispatch(feathersAuthentication.logout())
      dispatch(goBackNav())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelLeft)
