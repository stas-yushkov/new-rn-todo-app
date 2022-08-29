import React, { useReducer } from 'react';
import { useColorScheme } from 'react-native';

import { ThemeContext } from './themeContext';
import { themeReduser } from './themeReduser';

import { TOGGLE_THEME } from '../types';

export const ThemeState = ({ children }) => {
  const [state, dispatch] = useReducer(themeReduser, useColorScheme());

  const toggleTheme = () => dispatch({ type: TOGGLE_THEME })

  return <ThemeContext.Provider
    value={{
      theme: state,
      toggleTheme
    }}
  >
    {children}
  </ThemeContext.Provider>
}
