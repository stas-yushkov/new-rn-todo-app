import React, { useReducer } from 'react';

import { ScreenContext } from './screenContext';
import { screenReduser } from './screenReduser';

import { CHANGE_SCREEN } from '../types';

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReduser, null);

  const changeScreen = id => dispatch({ type: CHANGE_SCREEN, payload: id })

  return <ScreenContext.Provider
    value={{
      todoId: state,
      changeScreen
    }}
  >
    {children}
  </ScreenContext.Provider>
}
