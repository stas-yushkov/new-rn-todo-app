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
  const setDB_URL_BASE = (id) => (
    id
      ? `${Constants.manifest.extra.DB_URL_BASE}/${id}.json`
      : `${Constants.manifest.extra.DB_URL_BASE}.json`
  );

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      // await new Promise(r => setTimeout(r, 2000));//just sleep 2000ms
      const response = await fetch(setDB_URL_BASE(),
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        }
      );
      const data = await response.json();
      const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
      dispatch({ type: FETCH_TODOS, todos });
    } catch (error) {
      showError(`Something went wrong... \n ${error}`);
      // Network request failed
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  const addTodo = async title => {
    //need to handle loading
    const response = await fetch(setDB_URL_BASE(),
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title })
      }
    );
    const data = await response.json();
    dispatch({ type: ADD_TODO, title, id: data.name })
  };

  const updateTodo = async ({ id, title }) => {
    // showLoader();//need to handle loading
    clearError();
    try {
      // await new Promise(r => setTimeout(r, 2000));//just sleep 2000ms
      const response = await fetch(setDB_URL_BASE(id),
        {
          method: 'PATCH',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ title })
        })
      console.log(await response.json());
      dispatch({ type: UPDATE_TODO, id, title })
    } catch (error) {
      showError(`Something went wrong... \n ${error}`);
      console.error(error);
    } finally {
      // hideLoader();//need to handle loading
    }
  };

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
          onPress: async () => {
            changeScreen(null);
            await fetch(setDB_URL_BASE(id),
              {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
              })
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
