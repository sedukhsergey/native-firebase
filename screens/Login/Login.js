import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Container, Item, Input, Button, Label, Text, H3, Card, H2, CardItem, Body } from 'native-base'
import { withRouter } from 'react-router-native'
import { signIn } from '../../db/auth'
import { secondary, textSecondary, textPrimary, primary } from '../../theme/colors'
import { Spinner } from '../../modules'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      const response = await signIn({ email, password })
      setIsLoading(false)
      history.push('/home/main')
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  const handleSignUpRedirect = () => {
    history.push('/sign-up')
  }
  return (
    <>
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <Container style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Card style={styles.registerLinkContainer}>
            <CardItem>
              <Body style={styles.body}>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={setEmail} value={email} autoCapitalize="none" autoCorrect={false} />
                </Item>
                <Item floatingLabel style={styles.mb20}>
                  <Label>Password</Label>
                  <Input value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />
                </Item>
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <Button full rounded style={[styles.mb20, styles.button]} onPress={handleSignIn}>
                  <Text>Login</Text>
                </Button>
                <H3 style={styles.title}>Hasn't account yet?</H3>
                <H2 style={styles.registerLink} onPress={handleSignUpRedirect}>
                  Go to Registration
                </H2>
              </Body>
            </CardItem>
          </Card>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
    <Spinner isLoading={isLoading} />
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 20,
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mb20: {
    marginBottom: 20,
  },
  body: {
    alignItems: 'center',
  },
  registerLinkContainer: {
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    textAlign: 'center',
    color: textSecondary,
    marginBottom: 10,
  },
  registerLink: {
    fontSize: 22,
    color: secondary,
  },
})

export default withRouter(Login)
