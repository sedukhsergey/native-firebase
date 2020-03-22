import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Container, Item, Input, Button, Label, Text, H3, Card, H2, CardItem, Body } from 'native-base'
import { usersDb } from '../../db/firebase-init'
import { signUp } from '../../db/auth'
import { withRouter } from 'react-router-native'
import { secondary, textSecondary, textPrimary } from '../../theme/colors'
import {Spinner} from "../../modules"

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true)
    try {
      signUp({ email, password })
        .then(data => {
          usersDb.doc(data.user.uid).set({
            uid: data.user.uid,
            email: email,
            role: 'user',
          })
          setIsLoading(false)
          history.push('/main/home')
        })
        .catch(err => {
          setError(err.message)
          setIsLoading(false)
        })
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  const handleLoginRedirect = () => {
    history.push('/login')
  }

  return (
     <>
       <TouchableWithoutFeedback
         onPress={() => {
           Keyboard.dismiss()
         }}
       >
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
                   <Button full rounded success style={styles.mb20} onPress={handleSignUp}>
                     <Text>SignUp</Text>
                   </Button>
                   <H3 style={styles.title}>Has account already?</H3>
                   <H2 style={styles.loginLink} onPress={handleLoginRedirect}>
                     Go to Login
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
  loginLink: {
    fontSize: 22,
    color: secondary,
  },
})

export default withRouter(SignUp)
