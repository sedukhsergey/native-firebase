import React, { useState, useEffect, useContext } from 'react'
import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import {Button, Container, Content} from 'native-base'
import { withRouter, Route } from 'react-router-native'
import Main from './Main';
import app from 'firebase/app'
import { usersDb } from "../../db/firebase-init";
import { UserStore } from "../../store/user-store";

function Home({ history }) {
  const {state} = useContext(UserStore);
  useEffect(() => {
    if (state.user.uid) {
  		console.log('Home state.user.uid',state.user.uid)
	  const docUser = usersDb.doc(state.user.uid)
	  docUser.get()
		.then(user => {
		  console.log('user',user)
		})
		.catch(err => {
		  console.log('user err',err)
		})
	}
  }, [])

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
	<Container>
	  <View style={styles.form}>
		<TouchableHighlight>
		  <Button full rounded onPress={logOutHandler}>
			<Text>Log out</Text>
		  </Button>
		</TouchableHighlight>
		<TouchableHighlight style={styles.form}>
		  <Button full rounded success onPress={() => history.push('/home/main')}>
			<Text>Redirect to Main</Text>
		  </Button>
		</TouchableHighlight>
	  </View>
	  <Route path="/home/main" component={Main} />
	</Container>
  )
}

const styles = StyleSheet.create({
  title: {
	fontSize: 15,
	fontWeight: '600',
	marginBottom: 5,
  },
  control: {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
  },
  select: {
	padding: 10,
	height: 100,
  },
  form: {
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 30,
  },
})

export default Home
