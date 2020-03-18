import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const UserStore = React.createContext({});

export function UserStoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
	<UserStore.Provider value={{ state, dispatch }}>{props.children}</UserStore.Provider>
  );
}
