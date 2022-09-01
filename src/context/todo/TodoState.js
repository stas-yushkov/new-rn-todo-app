import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import Constants from 'expo-constants';

import { TodoContext } from './todoContext';
import { ScreenContext } from '../screen/screenContext';
import { todoReduser } from './todoReduser';


import {
  ADD_TODO, REMOVE_TODO, UPDATE_TODO,
  SHOW_LOADER, HIDE_LOADER,
  SHOW_ERROR, CLEAR_ERROR,
  FETCH_TODOS,
} from '../types';

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null
  }
  const { changeScreen } = useContext(ScreenContext)
  const [state, dispatch] = useReducer(todoReduser, initialState);
  const DB_URL_BASE = Constants.manifest.extra.DB_URL_BASE;

  const fetchTodos = async () => {
    const response = await fetch(DB_URL_BASE,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      }
    );
    const data = await response.json();
    const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
    dispatch({ type: FETCH_TODOS, todos });
  };

  const addTodo = async title => {
    const response = await fetch(DB_URL_BASE,
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title })
      }
    );
    const data = await response.json();
    dispatch({ type: ADD_TODO, title, id: data.name })
  };

  const updateTodo = ({ id, title }) => dispatch({ type: UPDATE_TODO, id, title });

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

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const showError = (error) => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        updateTodo,
        removeTodo,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
