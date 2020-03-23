import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import { UserStore } from '../../store/user-store'
import { usersDb } from '../../db/firebase-init'
import { Title } from '../../modules'

const Profile = () => {
  const { state } = useContext(UserStore)

  const [user, setUser] = useState({
    uid: null,
    name: '',
    image: '',
  })

  useEffect(() => {
    if (state && state.user && state.user.uid) {
      console.log('state.user.uid', state.user.uid)
      const userRef = usersDb.doc(state.user.uid)
      userRef.get()
        .then(user => {
          console.log('!!!user',user)
          console.log('22user data',user.data())
          setUser({
            uid: state.user.uid,
            name: user.data().name || '',
            image: user.data.image || ''
          })
        })
        .catch(err => {
          console.log('user err', err)
        })
    }
  }, [])
  console.log('user',user)
  return (
    <View>
      <Title title="My Profile" />
    </View>
  )
}

export default Profile
