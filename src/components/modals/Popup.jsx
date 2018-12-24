import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popup, View, Page, Navbar, NavRight, Link, Block, Icon } from 'framework7-react'
import { goBackNav } from '../../actions'

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

const mapStateToProps = (state) => ({
  reduxState: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePopup: () => dispatch(goBackNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPopup)
