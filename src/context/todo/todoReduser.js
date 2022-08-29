import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

const handlers = {
  [ADD_TODO]: (state, action) => ({
    ...state,
    todos: [...state.todos, {
      id: Date.now().toString(),
      title: action.title
    }]
  }),

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
