import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page, Navbar, Block } from 'framework7-react'
import { goBack } from 'framework7-redux'

export const goBackToHomePage = () => goBack()

class NotFoundPage extends Component {
  render () {
    const { onGoBackToHomePage } = this.props
    return (
      <Page>
        <Navbar title='Not found' backLink='Back' onBackClick={onGoBackToHomePage} />
        <Block strong>
          <p>Sorry</p>
          <p>Requested content not found.</p>
        </Block>
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackToHomePage())
  }
}

export default connect(null, mapDispatchToProps)(NotFoundPage)
