import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import { UserStore } from '../../store/user-store'
import { usersDb } from '../../db/firebase-init'
import { Title } from '../../modules'

const Profile = () => {
  const { state } = useContext(UserStore)
  return (
    <View>
      <Title title="My Profile" />
    </View>
  )
}

export default Profile
