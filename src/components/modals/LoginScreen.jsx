import React from 'react'
import { View, Page, LoginScreen, LoginScreenTitle, List, ListItem, Label, Input, ListButton, BlockFooter, Navbar, NavRight, Link } from 'framework7-react'

export default ({ onUsernameUpdated, onPasswordUpdated, onLogin, username, password, closeLogin }) => (
  <LoginScreen id='login-screen'>
    <View>
      <Page loginScreen>
        <Navbar title='Login'>
          <NavRight>
            <Link onClick={closeLogin}>Close</Link>
          </NavRight>
        </Navbar>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListItem>
            <Label>Username</Label>
            <Input
              name='username'
              placeholder='Username'
              type='text'
              onChange={({ target }) => onUsernameUpdated(target.value)}
              value={username}
            />
          </ListItem>
          <ListItem>
            <Label>Password</Label>
            <Input
              name='password'
              type='password'
              placeholder='Password'
              onChange={({ target }) => onPasswordUpdated(target.value)}
              value={password}
            />
          </ListItem>
        </List>
        <List>
          <ListButton title='Log In' onClick={onLogin} />
          <ListButton title='Sign Up' onClick={onLogin} />
        </List>
        <BlockFooter>
          <p>Click Sign In to see if you entered the correct password</p>
        </BlockFooter>
        <List>
          <ListButton title='Cancel' onClick={closeLogin} />
        </List>
      </Page>
    </View>
  </LoginScreen>
)
