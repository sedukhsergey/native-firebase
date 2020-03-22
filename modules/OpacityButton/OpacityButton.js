import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {primaryDark} from "../../theme/colors"

const OpacityButton = ({icon, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        {icon}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
  },
})


export default OpacityButton;
