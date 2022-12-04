import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import middleware from './middleware';

import users from './users/user';

const rootReducer = combineReducers({
  users,
});
const store = configureStore({
  reducer: rootReducer,
  middleware,
});
export default store;

export { rootReducer };
