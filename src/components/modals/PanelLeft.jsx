import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react'
import { navigateTo, goBack } from 'framework7-redux'

export const goToAbout = () => navigateTo('/about/')

export const openPanelLeft = () => navigateTo('/panel-left/')
export const closePanelLeft = () => goBack()

export const goToAboutPageFromLeftPanel = () => {
  return (dispatch) => {
    dispatch(closePanelLeft())
    dispatch(goToAbout())
  }
}

export const goToFormPageFromLeftPanel = () => {
  return (dispatch) => {
    dispatch(closePanelLeft())
  }
}

class PanelLeft extends Component {
  render () {
    const { onGoToAbout, onClosePanelLeft } = this.props
    return (
      <Panel left cover themeDark onPanelBackdropClick={onClosePanelLeft}>
        <Page>
          <Navbar title='Left Panel'/>
          <Block strong>
            <p>Left panel content goes here</p>
          </Block>
          <BlockTitle>Load page in main view</BlockTitle>
          <List>
            <ListItem link title='About' onClick={onGoToAbout} />
          </List>
        </Page>
      </Panel>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelLeft: () => dispatch(closePanelLeft()),
    onGoToAbout: () => dispatch(goToAboutPageFromLeftPanel()),
    onGoToForm: () => dispatch(goToFormPageFromLeftPanel())
  }
}

export default connect(null, mapDispatchToProps)(PanelLeft)