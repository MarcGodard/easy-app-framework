import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Page, LoginScreen, LoginScreenTitle, List, ListItem, Label, Input, ListButton, BlockFooter, Navbar, NavRight, Link, Icon } from 'framework7-react'
import { showAlert } from 'framework7-redux'
import { goBackNav, menuToSignUpNav } from '../../actions'
import { feathersAuthentication } from '../../store'

export const login = () => {
  return (dispatch, getState) => {
    dispatch(feathersAuthentication.authenticate(
      { type: 'local', email: this.props.email, password: this.props.password }
    ))
      .catch(() => dispatch(showAlert('Incorrect email and password combination!".', 'Failed Login')))
  }
}

class LoginScreenPopup extends Component {
  render () {
    const { onGoToSignUp, onEmailUpdated, onPasswordUpdated, onLogin, email, password, closeLogin } = this.props
    return (
      <LoginScreen id='login-screen'>
        <View>
          <Page loginScreen>
            <Navbar title='Login'>
              <NavRight>
                <Link onClick={closeLogin}>
                  <Icon f7='close' />
                </Link>
              </NavRight>
            </Navbar>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListItem>
                <Label>Email</Label>
                <Input
                  name='email'
                  placeholder='Email'
                  type='email'
                  onChange={({ target }) => onEmailUpdated(target.value)}
                  value={email}
                />
              </ListItem>
              <ListItem>
                <Label>Password</Label>
                <Input
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={({ target }) => onPasswordUpdated(target.value)}
                  value={password}
                />
              </ListItem>
            </List>
            <List>
              <ListButton title='Log In' onClick={onLogin} />
              <ListButton title='Sign Up' onClick={onGoToSignUp} />
            </List>
            <BlockFooter>
              <p>Click Sign In to see if you entered the correct password</p>
            </BlockFooter>
            <List>
              <ListButton title='Cancel' onClick={closeLogin} />
            </List>
          </Page>
        </View>
      </LoginScreen>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxState: state,
  isAuthenticated: state.auth && state.auth.isSignedIn,
  email: state.auth && state.auth.user && state.auth.user.email
})

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    onLogin: () => {},
    onEmailUpdated: () => {},
    onPasswordUpdated: () => {},
    closeLogin: () => dispatch(goBackNav()),
    onGoToSignUp: () => dispatch(menuToSignUpNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenPopup)
