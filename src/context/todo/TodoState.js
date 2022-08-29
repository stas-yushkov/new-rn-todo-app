import React, { useReducer } from 'react';
import { Alert } from 'react-native';

import { TodoContext } from './todoContext';
import { todoReduser } from './todoReduser';

import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SET_SELECTED_TODO_ID, TOGGLE_THEME } from '../types';

import { DEFAULT_COLOR_THEME } from '../../constants';

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      { id: 1, title: 'Title of FIRST todo' },
    ],
    selectedTodoId: null,
    theme: DEFAULT_COLOR_THEME,
  }
  const [state, dispatch] = useReducer(todoReduser, initialState);

  const addTodo = title => dispatch({ type: ADD_TODO, title });

  const toggleTheme = () => dispatch({ type: TOGGLE_THEME });

  const setSelectedTodoId = id => dispatch({ type: SET_SELECTED_TODO_ID, id });

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
            dispatch({ type: SET_SELECTED_TODO_ID, id: null })
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
        selectedTodoId: state.selectedTodoId,
        theme: state.theme,
        addTodo,
        updateTodo,
        removeTodo,
        setSelectedTodoId,
        toggleTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
