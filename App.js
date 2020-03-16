import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Item, Content, Input, Button, Label, Text } from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { usersDb } from './db/firebase-init';
import { signUp } from './db/auth';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const baseNativeInit = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setIsReady(true)
    };
    baseNativeInit()
  },[])
  if (!isReady) {
    return <AppLoading />
  }

  const handleSignUp = async () => {
    try {
      const response = await signUp({email, password})
      console.log('response',response)
      usersDb.doc(response.user.uid).set({
        uid: response.user.uid,
        email: email,
        role: 'user',
      })
    } catch(err) {
      console.log('errror',err)
    }
  }

  return (
    <Container>
      <Content>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input onChangeText={setEmail} value={email} autoCapitalize="none" autoCorrect={false}  />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Item>
        <Container style={styles.form}>
          <Button full rounded success>
            <Text>Login</Text>
          </Button>
          <TouchableHighlight>
            <Button full rounded success style={{ marginTop: 20 }} onPress={handleSignUp}>
              <Text>Sign up</Text>
            </Button>
          </TouchableHighlight>
        </Container>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
});
