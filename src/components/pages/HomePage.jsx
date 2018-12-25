import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page, Navbar, NavLeft, NavTitle, Link, Block } from 'framework7-react'
import { openPanelLeft } from '../../actions.js'

class HomePage extends Component {
  render () {
    const { onOpenLeftPanel } = this.props
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos='f7:menu' iconMd='material:menu' link onClick={onOpenLeftPanel} />
          </NavLeft>
          <NavTitle>My App</NavTitle>
        </Navbar>
        <Block strong>
          <p>Here is your blank Framework7 app. Let's see what we have here.</p>
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
    onOpenLeftPanel: () => dispatch(openPanelLeft())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
