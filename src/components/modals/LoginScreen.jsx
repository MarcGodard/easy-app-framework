import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Page, LoginScreen, LoginScreenTitle, List, ListButton, BlockFooter, Navbar, NavRight, Link, Icon, Block, Row, Button, ListInput } from 'framework7-react'
import { showAlert } from 'framework7-redux'
import { goBackNav, menuToSignUpNav } from '../../actions.js'
import { feathersAuthentication } from '../../feathers.js'

// const login = () => {
//   return (dispatch, getState) => {
//     console.log(getState())
//     dispatch(feathersAuthentication.authenticate(
//       { type: 'local', email: 'email@domain.com', password: '12345' }
//     ))
//       .catch(() => dispatch(showAlert('Incorrect email and password combination!".', 'Failed Login')))
//   }
// }

const login = (values, dispatch) => new Promise((resolve, reject) => {
  dispatch(feathersAuthentication.authenticate(
    { type: 'local', email: values.email, password: values.password }
  ))
    .then(() => resolve())
    .catch(() => dispatch(showAlert('Incorrect email and password combination!".', 'Failed Login')))
    // .catch(err => reject(err instanceof errors.BadRequest
    //   ? new SubmissionError(Object.assign({}, err.errors, { _error: err.message || '' }))
    //   : err
    // ));
})

class LoginScreenPopup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: 'Login with your Email and Password.'
    }
  }

  updateField (name, ev) {
    this.setState({ [name]: ev.target.value })
  }

  render () {
    const { onGoToSignUp, closeLogin, onLogin } = this.props
    const { email, password, message } = this.state
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
                value={email}
              />
              <ListInput
                label='Password'
                floatingLabel
                name='password'
                type='password'
                placeholder='Password'
                onChange={ev => this.updateField('password', ev)}
                value={password}
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
              <p>{message}</p>
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
    onLogin: () => login(),
    closeLogin: () => dispatch(goBackNav()),
    onGoToSignUp: () => dispatch(menuToSignUpNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenPopup)
