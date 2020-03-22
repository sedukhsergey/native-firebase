import React, { useState, useContext } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {H1, H2, Card, CardItem, Text} from 'native-base';
import { withRouter } from 'react-router-native'
import {UserStore} from "../../../store/user-store";
import { secondaryDark, secondary, secondaryLight, primary, primaryDark } from "../../../theme/colors"
import { Title } from '../../../modules'

const Main = ({ history }) => {
  const {state} = useContext(UserStore);

  return (
	<ScrollView style={styles.container}>
		<Title title="Firebase store"/>
	</ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 25,
		// paddingBottom: 20,
  },
	content: {
  	paddingTop: 10,
		paddingBottom: 10,
  	justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: primary,
	},
	title: {
  	color: 'white',
	},
});

export default withRouter(Main);
