import React from 'react'
import { Container } from 'native-base'
import { Route } from 'react-router-native'
import { Main, Profile } from '../../screens'


function Home() {
  return (
    <Container>
       <Route path="/home/main" component={Main} />
       <Route path="/home/profile" component={Profile} />
    </Container>
  )
}

export default Home
