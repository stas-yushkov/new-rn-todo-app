import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, SET_SELECTED_TODO_ID, TOGGLE_THEME } from "../types";

import colors from "../../constants/colors";

const handlers = {
  [ADD_TODO]: (state, action) => ({
    ...state,
    todos: [...state.todos, {
      id: Date.now().toString(),
      title: action.title
    }]
  }),

  [SET_SELECTED_TODO_ID]: (state, action) => {
    return ({
      ...state,
      selectedTodoId: action.id
    })
  },

  [TOGGLE_THEME]: (state) => {
    return ({
      ...state,
      theme: state.theme === Object.keys(colors)[0] ? Object.keys(colors)[1] : Object.keys(colors)[0]
    })
  },

  [REMOVE_TODO]: (state, action) => {
    return ({
      ...state,
      todos: state.todos.filter(({ id }) => id !== action.id)
    })
  },

  [UPDATE_TODO]: (state, action) => ({
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === action.id) {
        todo.title = action.title;
      }
      return todo;
    })
  }),

  DEFAULT: (state) => state
};

export const todoReduser = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
