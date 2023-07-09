import { createAction } from '@reduxjs/toolkit';

import { ActionsType } from '../../types/actions.type';
import getDefaultAsyncReducer from '../../utils/getDefaultAsyncReducer';
import getDefaultAsyncThunk from '../../utils/getDefaultAsyncThunk';

export const signUp = getDefaultAsyncThunk({
  actionType: ActionsType['users']['users/signUp'],
  apiMethodName: 'users.signUp',
});

export const signUpClear = createAction(ActionsType['users']['users/clear']);

export const signUpReducer = getDefaultAsyncReducer({
  name: ActionsType['users']['users/signUp'],
  action: signUp,
  clearAction: signUpClear,
}).reducer;
