import { combineReducers } from 'redux';
import appReducer from './appReducer.js';
import authReducer from './authReducer.js';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
});
