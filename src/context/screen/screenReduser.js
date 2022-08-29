import { CHANGE_SCREEN } from "../types";

const handlers = {
  [CHANGE_SCREEN]: (state, payload) => payload,
  DEFAULT: (state) => state
}

export const screenReduser = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action.payload);
}
