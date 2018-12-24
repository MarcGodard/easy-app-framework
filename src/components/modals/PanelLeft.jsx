import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Page, Navbar, List, ListItem } from 'framework7-react'
import { goBackNav, menuToAboutNav, menuToLoginNav, menuToSignUpNav } from '../../actions'
import { feathersAuthentication } from '../../store'

class PanelLeft extends Component {
  render () {
    const { onGoToAbout, onGoToLogin, onClosePanelLeft, onGoToSignUp, onLogout } = this.props
    return (
      <Panel left cover themeDark onPanelBackdropClick={onClosePanelLeft}>
        <Page>
          <Navbar title='Menu' />
          <List>
            <ListItem link title='About' onClick={onGoToAbout} />
          </List>
          <List>
            <ListItem link title='Login' onClick={onGoToLogin} />
            <ListItem link title='Sign Up' onClick={onGoToSignUp} />
            <ListItem link title='Logout' onClick={onLogout} />
          </List>
        </Page>
      </Panel>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxState: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelLeft: () => dispatch(goBackNav()),
    onGoToAbout: () => dispatch(menuToAboutNav()),
    onGoToLogin: () => dispatch(menuToLoginNav()),
    onGoToSignUp: () => dispatch(menuToSignUpNav()),
    onLogout: () => {
      dispatch(feathersAuthentication.logout())
      dispatch(goBackNav())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelLeft)
