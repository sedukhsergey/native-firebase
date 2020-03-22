import React from 'react'
import { StyleSheet, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Button, H3, Header as HeaderNativeBase, Icon, Left, Right } from 'native-base'
import { primaryDark } from '../../../theme/colors'
import FeatureIcons from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OpacityButton } from '../../../modules'

const PrivateHeader = ({ handleOpenDrawer, history }) => {
  return (
    <HeaderNativeBase style={styles.header}>
      <Left>
        <OpacityButton
          handlePress={() => history.goBack()}
          icon={<MaterialIcons size={20} name="arrow-left" color={'white'} />}
        />
      </Left>
      <H3 style={styles.title}>PRIVATE HEADER</H3>
      <Right style={styles.buttonsContainer}>
        <OpacityButton
          handlePress={() => history.push('/home/profile')}
          icon={<FeatureIcons size={20} name="user" color={'white'} />}
        />
        <OpacityButton
          handlePress={handleOpenDrawer}
          icon={<FeatureIcons size={20} name="menu" color={'white'} />}
        />
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
    color: '#fff',
    paddingTop: 5
  },
  button: {
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export default PrivateHeader
