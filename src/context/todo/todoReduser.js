import {
  ADD_TODO, UPDATE_TODO, REMOVE_TODO,
  FETCH_TODOS,
  SHOW_LOADER, HIDE_LOADER,
  SHOW_ERROR, CLEAR_ERROR,
} from '../types';

const handlers = {
  [ADD_TODO]: (state, { id, title }) => ({
    ...state,
    todos: [...state.todos, { id, title }]
  }),

  [UPDATE_TODO]: (state, action) => ({
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === action.id) {
        todo.title = action.title;
      }
      return todo;
    })
  }),

  [REMOVE_TODO]: (state, action) => ({
    ...state,
    todos: state.todos.filter(({ id }) => id !== action.id)
  }),

  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),

  [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
  [CLEAR_ERROR]: (state) => ({ ...state, error: null }),

  [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),

  DEFAULT: (state) => state
};

export const todoReduser = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
