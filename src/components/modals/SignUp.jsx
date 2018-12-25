import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popup, View, Page, Navbar, NavRight, Link, Icon, BlockTitle, List, ListItem, ListInput, Block, Row, Button, BlockFooter } from 'framework7-react'
import { goBackNav } from '../../actions.js'
import { feathersClient } from '../../feathers.js'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      checkbox: false,
      error: ''
    }
  }

  updateField (name, ev) {
    this.setState({ [name]: ev.target.value })
  }

  switchCheckbox (name) {
    if (this.state[name]) this.setState({ [name]: false })
    else this.setState({ [name]: true })
  }

  signUp (ev) {
    const { email, checkbox } = this.state
    if (checkbox) {
      feathersClient.service('/users').create({ email })
        .then(() => {
          const app = this.$f7
          app.dialog.alert('Please check your email for your temporary password to use for logging in.', 'Sign Up Successful', () => {
            this.$f7router.back()
            this.$f7router.navigate('/login/')
          })
        })
        .catch(err => {
          this.setState({ error: err.message })
        })
    }
    ev.preventDefault()
  }

  render () {
    const { onClosePopup, onOpenTerms } = this.props
    const { email, checkbox, error } = this.state
    return (
      <Popup>
        <View>
          <Page>
            <Navbar title='Sign Up'>
              <NavRight>
                <Link onClick={onClosePopup}>
                  <Icon f7='close' />
                </Link>
              </NavRight>
            </Navbar>
            <BlockTitle>Sign Up Form</BlockTitle>
            <Block>
              <p>Fill this form to receive a temporary password in your email to login.</p>
              <p>You can view our terms of service by clicking <Link onClick={onOpenTerms}>here</Link>.</p>
            </Block>
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
              <ListItem
                checkbox
                name='terms-checkbox'
                title='Agree to Terms of Service'
                value={checkbox}
                onClick={() => this.switchCheckbox('checkbox')}
              />
            </List>
            <Block>
              <Row tag='p'>
                <Button className='col' fill raised onClick={this.signUp.bind(this)}>Sign Up</Button>
              </Row>
            </Block>
            <BlockFooter>
              <p>{error}</p>
            </BlockFooter>
          </Page>
        </View>
      </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxState: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePopup: () => dispatch(goBackNav()),
    onOpenTerms: () => dispatch(goBackNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
