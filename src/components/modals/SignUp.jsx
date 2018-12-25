import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popup, View, Page, Navbar, NavRight, Link, Icon, BlockTitle, List, ListItem, Label, Input, Block, Row, Button } from 'framework7-react'
import { goBackNav } from '../../actions'
import { feathersClient } from '../../store'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      checkbox: false
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
          app.dialog.alert('Hello!')
        })
    }
    ev.preventDefault()
  }

  render () {
    const { onClosePopup, onOpenTerms } = this.props
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
            <Block strong>
              <p>Fill this form to receive a temporary password in your email and to sign up.</p>
              <p>You can view our terms of service by clicking <Link onClick={onOpenTerms}>here</Link>.</p>
            </Block>
            <List form>
              <ListItem>
                <Label>E-mail</Label>
                <Input type='email' placeholder='E-mail' value={this.state.email} onChange={ev => this.updateField('email', ev)} />
              </ListItem>
              <ListItem checkbox name='terms-checkbox' title='Agree to Terms of Service' value={this.state.checkbox} onClick={() => this.switchCheckbox('checkbox')} />
            </List>
            <Block strong>
              <Row tag='p'>
                <Button className='col' fill onClick={this.signUp.bind(this)}>Initiate Sign Up</Button>
              </Row>
            </Block>
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
