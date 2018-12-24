import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popup, View, Page, Navbar, NavRight, Link, Icon, BlockTitle, List, ListItem, Label, Input, Block, Row, Button } from 'framework7-react'
import { goBackNav } from '../../actions'

class SignUp extends Component {
  render () {
    const { onClosePopup, onEmailUpdated, onOpenTerms, email } = this.props
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
                <Input type='email' placeholder='E-mail' onChange={({ target }) => onEmailUpdated(target.value)} value={email} />
              </ListItem>
              <ListItem checkbox name='my-checkbox' title='Agree to Terms of Service'
                // onClick={() => onCheckboxUpdated('terms')}
                // checked={checkboxGroup['checkbox']}
              />
            </List>
            <Block strong>
              <Row tag='p'>
                <Button className='col' fill>Initiate Sign Up</Button>
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
    onEmailUpdated: (email) => {},
    onOpenTerms: () => dispatch(goBackNav()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
