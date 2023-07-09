import { combineReducers } from '@reduxjs/toolkit';

import { signInReducer } from './signIn';
import { signUpReducer } from './signUp';

export const usersReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
});
