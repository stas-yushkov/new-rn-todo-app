import { TOGGLE_THEME } from '../types';

import colors from '../../constants/colors';

const handlers = {
  [TOGGLE_THEME]: (state) => state === Object.keys(colors)[0] ? Object.keys(colors)[1] : Object.keys(colors)[0],
  DEFAULT: state => state
};

export const themeReduser = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action.payload);
};
