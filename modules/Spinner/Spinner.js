import React from 'react'
import { StyleSheet, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import SpinnerOverlay from 'react-native-loading-spinner-overlay';
import { secondary } from '../../theme/colors'

const Spinner = ({ looks, isLoading }) => {
  return (
      <SpinnerOverlay visible={isLoading} color={looks}/>
    )
}

Spinner.defaultProps = {
  looks: secondary,
}

export default Spinner
