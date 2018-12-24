import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page, Navbar, NavLeft, NavTitle, Link, Block, BlockTitle, List, ListItem, Row, Col, Button } from 'framework7-react'
import { navigateTo } from 'framework7-redux/dist/index'

export const goToDefaultRoute = () => navigateTo('/load-something-that-doesnt-exist/')
export const goToAbout = () => navigateTo('/about/')
export const openPanelLeft = () => navigateTo('/panel-left/')
export const openLogin = () => navigateTo('/login/')
export const openPopup = () => navigateTo('/popup/')

class HomePage extends Component {
  render () {
    const { onGoToAbout, onGoToDefaultRoute, onOpenLeftPanel, onOpenPopup, onOpenLoginScreen } = this.props
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
        <BlockTitle>Navigation</BlockTitle>
        <List>
          <ListItem link onClick={onGoToAbout} title='About' />
        </List>
        <BlockTitle>Modals</BlockTitle>
        <Block strong>
          <Row>
            <Col width='50'>
              <Button fill raised onClick={onOpenPopup}>Popup</Button>
            </Col>
            <Col width='50'>
              <Button fill raised onClick={onOpenLoginScreen}>Login Screen</Button>
            </Col>
          </Row>
        </Block>
        <BlockTitle>Panels</BlockTitle>
        <Block strong>
          <Row>
            <Col width='50'>
              <Button fill raised onClick={onOpenLeftPanel}>Left Panel</Button>
            </Col>
          </Row>
        </Block>
        <List>
          <ListItem link onClick={onGoToDefaultRoute} title='Default Route (404)' />
        </List>
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGoToAbout: () => dispatch(goToAbout()),
    onGoToDefaultRoute: () => dispatch(goToDefaultRoute()),
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
    onOpenPopup: () => dispatch(openPopup()),
    onOpenLoginScreen: () => dispatch(openLogin())
  }
}

export default connect(null, mapDispatchToProps)(HomePage)
