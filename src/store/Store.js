import React, {createContext, useReducer} from 'react';
import {USER_REGISTERED, NAME_CHANGED, SUBMIT_NAME} from './types';

const initialState = {
  isUserRegistered: false,
  userName: undefined,
};

export const StoreContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return {...state, isUserRegistered: action.payload};

    case NAME_CHANGED:
      return {...state, userName: action.payload};

    case SUBMIT_NAME:
      return {...state, userName: action.payload};

    default:
      return state;
  }
};

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
