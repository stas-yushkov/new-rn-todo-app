import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';

import { TodoContext } from './todoContext';
import { ScreenContext } from '../screen/screenContext';
import { todoReduser } from './todoReduser';

import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_THEME } from '../types';

import { DEFAULT_COLOR_THEME } from '../../constants';

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      { id: 1, title: 'Title of FIRST todo' },
    ],
    theme: DEFAULT_COLOR_THEME,
  }
  const { changeScreen } = useContext(ScreenContext)
  const [state, dispatch] = useReducer(todoReduser, initialState);

  const addTodo = title => dispatch({ type: ADD_TODO, title });

  const toggleTheme = () => dispatch({ type: TOGGLE_THEME });

  const removeTodo = id => {
    const todoToRemove = state.todos.find(todo => todo.id === id)

    Alert.alert(
      'Removing todo...',
      `Are you shure you want to remove '${todoToRemove.title}'?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Remove',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id })
          }
        }
      ],
      { cancelable: true }
    );
  };

  const updateTodo = ({ id, title }) => dispatch({ type: UPDATE_TODO, id, title });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        theme: state.theme,
        addTodo,
        updateTodo,
        removeTodo,
        toggleTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
