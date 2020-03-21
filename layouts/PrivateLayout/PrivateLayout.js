import React, { useEffect, useContext, useRef } from 'react';
import {StyleSheet, View} from "react-native"
import { withRouter } from 'react-router-native';
import app from "firebase/app";
import { UserStore } from "../../store/user-store";
import {Drawer, PublicFooter, PrivateHeader} from "../../modules"


const PrivateLayout = ({history, children}) => {
  const { dispatch } = useContext(UserStore);
  useEffect(() => {
	const { currentUser } = app.auth()
	if (!currentUser) history.push('/login')
	dispatch({type: 'SET_USER', payload: currentUser })
  },[])

  const drawerRef = useRef(null)
  const handleOpenDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current._root.open()
    }
  }

  return (
    <>
      <Drawer ref={drawerRef}>
        <View style={styles.layout}>
          <View style={styles.container}>
            <View style={styles.main}>
              <PrivateHeader handleOpenDrawer={handleOpenDrawer} history={history}/>
              {children}
            </View>
            <PublicFooter/>
          </View>
        </View>
      </Drawer>
    </>
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

export default withRouter(PrivateLayout);
