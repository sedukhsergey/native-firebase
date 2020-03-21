import React, { useState, useContext } from 'react';
import {StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import {Button, Container, Content, Input, Item, Label, Text} from 'native-base';
import { withRouter } from 'react-router-native'
import {UserStore} from "../../../store/user-store";
import { database } from '../../../db/firebase-init';


const Main = ({ history }) => {
  const [name, setName] = useState('');
  const {state} = useContext(UserStore);

  const handleChangeName= () => {
	database.collection("users").add({
	  first: "Ada",
	  last: "Lovelace",
	  born: 1815
	})
	  .then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	  })
	  .catch(function(error) {
		console.error("Error adding document: ", error);
	  });
  }
  return (
	<ScrollView style={styles.container}>
		<Item floatingLabel>
		  <Label>User</Label>
		  <Input
			value={name}
			onChangeText={setName}
			autoCapitalize="none"
			autoCorrect={false}
		  />
		</Item>
		<Button full rounded success onPress={handleChangeName}>
		  <Text>Change user </Text>
		</Button>
	</ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
	paddingBottom: 20
  },
  form: {
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 20,
  },
});

export default withRouter(Main);
