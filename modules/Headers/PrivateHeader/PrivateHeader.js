import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
import {Button, H3, Header as HeaderNativeBase, Icon, Left, Right} from 'native-base'
import { primaryDark } from '../../../theme/colors'

const PrivateHeader = ({handleOpenDrawer, history}) => {
  return (
    <HeaderNativeBase style={styles.header}>
      <Left>
        <Button transparent onPress={() => history.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <H3 style={styles.title}>PRIVATE HEADER</H3>
      <Right>
        <TouchableHighlight>
          <Button transparent>
            <Icon name="menu" onPress={handleOpenDrawer}/>
          </Button>
        </TouchableHighlight>
      </Right>
    </HeaderNativeBase>
  )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 20,
      backgroundColor: primaryDark,
      alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff'
  }
})

export default PrivateHeader
