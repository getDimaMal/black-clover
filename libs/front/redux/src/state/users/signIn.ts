import { createAction } from '@reduxjs/toolkit';

import { ActionsType } from '../../types/actions.type';
import getDefaultAsyncReducer from '../../utils/getDefaultAsyncReducer';
import getDefaultAsyncThunk from '../../utils/getDefaultAsyncThunk';

export const signIn = getDefaultAsyncThunk({
  actionType: ActionsType['users']['users/signIn'],
  apiMethodName: 'users.signIn',
});

export const signInClear = createAction(ActionsType['users']['users/clear']);

export const signInReducer = getDefaultAsyncReducer({
  name: ActionsType['users']['users/signIn'],
  action: signIn,
  clearAction: signInClear,
}).reducer;
