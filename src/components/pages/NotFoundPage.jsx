import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page, Navbar, Block } from 'framework7-react'
import { goBackNav } from '../../actions.js'

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

const mapStateToProps = (state) => ({
  reduxState: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage)
