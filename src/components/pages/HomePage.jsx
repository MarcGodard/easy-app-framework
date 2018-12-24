import React from 'react'
import { Page, Navbar, NavLeft, NavTitle, Link, Block, BlockTitle, List, ListItem, Row, Col, Button } from 'framework7-react'

export default ({ onGoToAbout, onGoToDefaultRoute, onOpenLeftPanel, onOpenPopup, onOpenLoginScreen }) => (
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
