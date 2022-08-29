import React, { useReducer } from 'react';

import { ThemeContext } from './themeContext';
import { themeReduser } from './themeReduser';

import { TOGGLE_THEME } from '../types';

import { DEFAULT_COLOR_THEME } from '../../constants';

export const ThemeState = ({ children }) => {
  const [state, dispatch] = useReducer(themeReduser, DEFAULT_COLOR_THEME);

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
