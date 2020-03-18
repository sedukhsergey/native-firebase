import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { NativeRouter, Route } from 'react-router-native';
import { Ionicons } from '@expo/vector-icons';
import { Loading, Login, Home } from "./screens";
import { UserStoreProvider } from './store/user-store';
import { PrivateLayout } from "./layouts";

export default function App() {

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

  return (
    <NativeRouter>
      <UserStoreProvider>
        <Route exact path="/" component={Loading} />
        <Route path="/home">
          <PrivateLayout>
            <Home/>
          </PrivateLayout>
        </Route>
        <Route path="/login" component={Login} />
        {/*<Route path="/sign_up" component={SignUp} />*/}
      </UserStoreProvider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
});
