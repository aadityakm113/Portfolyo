// reducers/index.js

import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
