import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popup, View, Page, Navbar, NavRight, Link, Block, Icon } from 'framework7-react'
import { navigateTo, goBack } from 'framework7-redux'

export const openPopup = () => navigateTo('/popup/')
export const closePopup = () => goBack()

class SignUpPopup extends Component {
  render () {
    const { onClosePopup } = this.props
    return (
      <Popup>
        <View>
          <Page>
            <Navbar title='Popup'>
              <NavRight>
                <Link onClick={onClosePopup}>
                  <Icon f7='close' />
                </Link>
              </NavRight>
            </Navbar>
            <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</Block>
          </Page>
        </View>
      </Popup>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenPopup: () => dispatch(openPopup()),
    onClosePopup: () => dispatch(closePopup())
  }
}

export default connect(null, mapDispatchToProps)(SignUpPopup)
