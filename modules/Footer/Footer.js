import React from 'react'
import { View, StyleSheet } from 'react-native'
import { H3 } from 'native-base'
import { primaryDark } from '../../theme/colors'

const Footer = () => {
  return (
    <View style={styles.container}>
      <H3 style={styles.title}>FOOTER</H3>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: primaryDark,
  },
  title: {
    textAlign: 'center',
    color: '#fff'
  }
})

export default Footer
