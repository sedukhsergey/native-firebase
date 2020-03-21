import React, { useEffect, useContext, useRef } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, Button } from 'native-base'
import { Route, Redirect } from 'react-router-native'
import app from 'firebase/app'
import { usersDb } from '../../db/firebase-init'
import { UserStore } from '../../store/user-store'
import Main from './Main'
import { Drawer } from '../../modules';
import Header from "../../modules/Header"
import Footer from "../../modules/Footer"


function Home({ history }) {
  const { state } = useContext(UserStore)
  useEffect(() => {
    if (state.user.uid) {
      console.log('Home state.user.uid', state.user.uid)
      const docUser = usersDb.doc(state.user.uid)
      docUser
        .get()
        .then(user => {
          console.log('user', user)
        })
        .catch(err => {
          console.log('user err', err)
        })
    }
  }, [])

  const logOutHandler = () => {
    app
      .auth()
      .signOut()
      .then(
        () => {
          history.push('/login')
        },
        error => {
          console.error('Sign Out Error', error)
        }
      )
  }

  const drawerRef = useRef(null)
  const handleOpenDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current._root.open()
    }
  }

  return (
    <Container>
      <Drawer ref={drawerRef}>
        <Header/>
         <Route path="/home/main" component={Main} />
        <Footer/>
      </Drawer>
    </Container>
  )
}

export default Home
