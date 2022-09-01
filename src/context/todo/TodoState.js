import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import Constants from 'expo-constants';

import { TodoContext } from './todoContext';
import { ScreenContext } from '../screen/screenContext';
import { todoReduser } from './todoReduser';

import { Firebase } from '../../utils/firebase'

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
      const data = await Firebase.get();
      const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
      dispatch({ type: FETCH_TODOS, todos });
    } catch (error) {
      showError(`Something went wrong... \n ${error}`);
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  const addTodo = async title => {
    //need to handle loading
    clearError();
    try {
      const data = await Firebase.post({ title });
      dispatch({ type: ADD_TODO, title, id: data.name });
    } catch (error) {
      showError(`Something went wrong... \n ${error}`);
      console.error(error);
    } finally {
      // hideLoader();//need to handle loading
    }
  };

  const updateTodo = async ({ id, title }) => {
    // showLoader();//need to handle loading
    clearError();
    try {
      await Firebase.patch(id, { title })
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
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          onPress: async () => {
            changeScreen(null);
            clearError();
            // showLoader();//need to handle loading
            try {
              await Firebase.delete(id);
              dispatch({ type: REMOVE_TODO, id })
            } catch (error) {
              showError(`Something went wrong... \n ${error}`);
              console.error(error);
            } finally {
              // hideLoader();//need to handle loading
            }
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
