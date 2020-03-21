import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { Container } from "native-base"
import { Header, Footer } from '../../modules';

const PublicLayout = (props) => {
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
          <View style={styles.main}>
            <Header/>
              {React.cloneElement(props.children, props)}
          </View>
        <Footer/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  main: {
    flex: 1,
  },
})

export default PublicLayout;
