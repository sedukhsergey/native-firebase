import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { Button, Container, Content, Input, Item, Label, Text } from 'native-base'
import { signUp } from '../../db/auth'
import { usersDb } from '../../db/firebase-init'

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = () => {
    try {
      signUp({ email, password })
        .then(data => {
          usersDb.doc(data.user.uid).set({
            uid: data.user.uid,
            email: email,
            role: 'user',
            name: '',
          })
          history.push('/main/home')
        })
        .catch(err => {
          console.log('SignUp error', err)
        })
    } catch (err) {
      console.log('errror', err)
    }
  }

  return (
    <Container>
      <Content>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input onChangeText={setEmail} value={email} autoCapitalize="none" autoCorrect={false} />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />
        </Item>
        <Container style={styles.form}>
          <TouchableHighlight>
            <Button full rounded success style={{ marginTop: 20 }} onPress={handleSignUp}>
              <Text>Sign up</Text>
            </Button>
          </TouchableHighlight>
        </Container>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
})

export default SignUp
