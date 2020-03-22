import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import { H2 } from 'native-base'
import {primary} from "../../theme/colors"

const Title = ({title}) => {
  return (
    <View style={styles.content}>
      <H2 style={styles.title}>{title}</H2>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Title
