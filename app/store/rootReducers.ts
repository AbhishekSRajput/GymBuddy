import { combineReducers } from '@reduxjs/toolkit';

import markdownTextReducer from './markdownTextSlice';

const rootReducer = combineReducers({
  markdownText: markdownTextReducer,
});

export default rootReducer;

