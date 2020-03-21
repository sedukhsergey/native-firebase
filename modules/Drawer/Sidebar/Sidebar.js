import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { withRouter, Route } from 'react-router-native'

import { Container, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base'
import app from 'firebase/app'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { textSecondary, secondary, primary } from '../../../theme/colors'
const routesList = [
  {
    id: 1,
    title: 'Main',
    route: '/home/main',
    renderIcon: color => <MaterialIcons size={20} name="home" color={color} />,
  },
  {
    id: 5,
    title: 'Profile',
    route: '/home/profile',
    renderIcon: color => <MaterialIcons size={20} name="pencil" color={color} />,
  },
]

const Sidebar = ({ history, handleCloseDrawer }) => {
  const [activeRoute, setActiveRoute] = useState(null)

  useEffect(() => {
    const currentRoute = routesList.find(item => item.route === history.location.pathname)
    if (currentRoute && currentRoute.id !== activeRoute) {
      setActiveRoute(currentRoute.id)
    }
  }, [history.location.pathname])

  const logOutHandler = () => {
    app
      .auth()
      .signOut()
      .then(
        () => {
          console.log('Signed Out')
          history.push('/login')
        },
        error => {
          console.error('Sign Out Error', error)
        }
      )
  }

  return (
    <Container style={styles.container}>
      <Content>
        <List>
          <ListItem onPress={logOutHandler} style={styles.listItem}>
            <Left >
              <Text style={styles.primary}>Log Out</Text>
            </Left>
            <Right>
              <MaterialIcons name="logout" size={20} color={primary}/>
            </Right>
          </ListItem>
          {routesList.map(item => (
            <ListItem
              key={item.id}
              selected={item.id === activeRoute}
              onPress={() => {
                history.push(item.route)
                handleCloseDrawer()
              }}
              style={item.id === activeRoute ? styles.activeItem : styles.listItem}
            >
              <Left>
                <Text style={item.id === activeRoute ? styles.activeItemText : styles.primary}>{item.title}</Text>
              </Left>
              <Right>
                {item.renderIcon(item.id === activeRoute ? secondary : primary)}
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
  },
  activeItem: {
    borderBottomColor: secondary,
    borderBottomWidth: 1,
  },
  listItem: {
    borderBottomColor: primary,
    borderBottomWidth: 1,
  },
  activeItemText: {
    color: secondary,
  },
  primary: {
    color: primary,
  },
})

export default withRouter(Sidebar)
