import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Page, LoginScreen, LoginScreenTitle, List, ListItem, Label, Input, ListButton, BlockFooter, Navbar, NavRight, Link } from 'framework7-react'
import { goBack, showAlert } from 'framework7-redux'

export const getUsername = (state) => {
  return state.login.username
}

export const getPassword = (state) => {
  return state.login.password
}

export const loginValid = (state) => {
  return getPassword(state) === 'password!'
}

export const closeLogin = () => goBack()

export const usernameUpdated = (username) => ({
  type: 'USERNAME_UPDATED',
  payload: username
})

export const passwordUpdated = (password) => ({
  type: 'PASSWORD_UPDATED',
  payload: password
})

export const login = () => {
  return (dispatch, getState) => {
    if (loginValid(getState())) {
      dispatch(closeLogin())
    } else {
      dispatch(showAlert('Incorrect password! Hint: please enter "password!".', 'Failed Login'))
    }
  }
}

class LoginScreenPopup extends Component {
  render () {
    const { onUsernameUpdated, onPasswordUpdated, onLogin, username, password, closeLogin } = this.props
    return (
      <LoginScreen id='login-screen'>
        <View>
          <Page loginScreen>
            <Navbar title='Login'>
              <NavRight>
                <Link onClick={closeLogin}>Cancel</Link>
              </NavRight>
            </Navbar>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListItem>
                <Label>Username</Label>
                <Input
                  name='username'
                  placeholder='Username'
                  type='text'
                  onChange={({target}) => onUsernameUpdated(target.value)}
                  value={username}
                />
              </ListItem>
              <ListItem>
                <Label>Password</Label>
                <Input
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={({target}) => onPasswordUpdated(target.value)}
                  value={password}
                />
              </ListItem>
            </List>
            <List>
              <ListButton title='Log In' onClick={onLogin}/>
              <ListButton title='Sign Up' onClick={onLogin}/>
            </List>
            <BlockFooter>
              <p>Click Sign In to see if you entered the correct password</p>
            </BlockFooter>
            <List>
              <ListButton title='Cancel' onClick={closeLogin}/>
            </List>
          </Page>
        </View>
      </LoginScreen>
    )
  }
}

const mapStateToProps = (state) => ({
  username: getUsername(state),
  password: getPassword(state)
})

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    onUsernameUpdated: (username) => dispatch(usernameUpdated(username)),
    onPasswordUpdated: (password) => dispatch(passwordUpdated(password)),
    onLogin: () => dispatch(login()),
    closeLogin: () => dispatch(closeLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenPopup)
