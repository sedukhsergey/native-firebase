import React, { useEffect, useContext } from 'react';
import { Container } from 'native-base';
import { withRouter } from 'react-router-native';
import app from "firebase/app";
import { UserStore } from "../../store/user-store";

const PrivateLayout = (props) => {
  const { dispatch } = useContext(UserStore);
  useEffect(() => {
	const { currentUser } = app.auth()
	if (!currentUser) history.push('/login')
	dispatch({type: 'SET_USER', payload: currentUser })
  },[])
  return (
	<Container>
	  {React.cloneElement(props.children, props)}
	</Container>
  )
}

export default withRouter(PrivateLayout);
