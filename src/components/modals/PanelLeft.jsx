import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Page, Navbar, List, ListItem } from 'framework7-react'
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
          <Navbar title='Menu' />
          <List>
            <ListItem link title='Home' onClick={onGoToAbout} />
            <ListItem link title='About' onClick={onGoToAbout} />
          </List>
          <List>
            <ListItem link title='Login' onClick={onGoToAbout} />
            <ListItem link title='Sign Up' onClick={onGoToAbout} />
          </List>
        </Page>
      </Panel>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxState: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelLeft: () => dispatch(closePanelLeft()),
    onGoToAbout: () => dispatch(goToAboutPageFromLeftPanel()),
    onGoToForm: () => dispatch(goToFormPageFromLeftPanel())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelLeft)
