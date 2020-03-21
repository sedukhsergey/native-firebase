import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H3 } from 'native-base'
import { primaryDark } from '../../../theme/colors'

const PublicHeader = () => {
  return (
    <View style={styles.container}>
      <H3 style={styles.title}>HEADER</H3>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: 60,
    backgroundColor: primaryDark,
  },
  title: {
    textAlign: 'center',
    color: '#fff'
  }
})

export default PublicHeader
