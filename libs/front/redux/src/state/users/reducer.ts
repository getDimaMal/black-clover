import { combineReducers } from '@reduxjs/toolkit';

import { checkEmailReducer } from './checkEmail';
import { signInReducer } from './signIn';
import { signUpReducer } from './signUp';

export const usersReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  checkEmail: checkEmailReducer,
});
