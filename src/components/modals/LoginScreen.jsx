import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Page, LoginScreen, LoginScreenTitle, List, ListButton, BlockFooter, Navbar, NavRight, Link, Icon, Block, Row, Button, ListInput } from 'framework7-react'
import { showAlert } from 'framework7-redux'
import { goBackNav, menuToSignUpNav } from '../../actions.js'
import { feathersAuthentication } from '../../feathers.js'

export const login = () => {
  return (dispatch, getState) => {
    dispatch(feathersAuthentication.authenticate(
      { type: 'local', email: 'marc@l2t.co', password: '12345' }
    ))
      .catch(() => dispatch(showAlert('Incorrect email and password combination!".', 'Failed Login')))
  }
}

class LoginScreenPopup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  updateField (name, ev) {
    this.setState({ [name]: ev.target.value })
  }

  render () {
    const { onGoToSignUp, closeLogin, onLogin } = this.props
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
            <List form noHairlinesMd>
              <ListInput
                label='Email'
                floatingLabel
                name='email'
                placeholder='Email'
                type='email'
                onChange={ev => this.updateField('email', ev)}
                value={this.state.email}
              />
              <ListInput
                label='Password'
                floatingLabel
                name='password'
                type='password'
                placeholder='Password'
                onChange={ev => this.updateField('password', ev)}
                value={this.state.password}
              />
            </List>
            <Block>
              <Row tag='p'>
                <Button className='col' fill raised onClick={onLogin}>Log In</Button>
              </Row>
            </Block>
            <List>
              <ListButton title='Sign Up' onClick={onGoToSignUp} />
            </List>
            <BlockFooter>
              <p>Login with your Email and Password.</p>
            </BlockFooter>
          </Page>
        </View>
      </LoginScreen>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxState: state,
  isAuthenticated: state.auth && state.auth.isSignedIn
})

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    onLogin: () => dispatch(login()),
    closeLogin: () => dispatch(goBackNav()),
    onGoToSignUp: () => dispatch(menuToSignUpNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenPopup)
