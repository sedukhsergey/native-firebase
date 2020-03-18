import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Container, Item, Content, Input, Button, Label, Text, H3, Card, CardItem, Body } from 'native-base'
import { usersDb } from '../../db/firebase-init'
import { signUp, signIn } from '../../db/auth'
import { withRouter } from 'react-router-native'
import { secondary, textSecondary, textPrimary } from '../../theme/colors';

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = () => {
    try {
      signUp({ email, password })
        .then(data => {
          console.log('SignUP success')
          console.log('data', data)
          usersDb.doc(data.user.uid).set({
            uid: data.user.uid,
            email: email,
            role: 'user',
            name: '',
          })
        })
        .catch(err => {
          console.log('SignUp error', err)
        })
    } catch (err) {
      console.log('errror', err)
    }
  }

  const handleSignIn = async () => {
    try {
      const response = await signIn({ email, password })
    } catch (err) {
      console.log('signIn error', err)
    }
  }

  return (
    <Container>
      <Content>
        <Card style={styles.registerLinkContainer}>
          <CardItem>
            <Body>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={setEmail} value={email} autoCapitalize="none" autoCorrect={false} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />
            </Item>
            <View style={styles.form}>
              <TouchableHighlight>
                <Button full rounded success onPress={handleSignIn}>
                  <Text>Login</Text>
                </Button>
              </TouchableHighlight>
              <TouchableHighlight>
                <Button full rounded success style={{ marginTop: 20 }} onPress={handleSignUp}>
                  <Text>Sign up</Text>
                </Button>
              </TouchableHighlight>
            </View>
              <H3 style={styles.title}>Hasn't account yet?</H3>
              <Text style={styles.registerLink}>Register</Text>
            </Body>
          </CardItem>
        </Card>
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
  registerLinkContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    color: textSecondary,
  },
  registerLink: {
    fontSize: 22,
    color: secondary,
  },
})

export default withRouter(Login)
