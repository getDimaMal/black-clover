import { createAction } from '@reduxjs/toolkit';

import { ActionsType } from '../../types/actions.type';
import getDefaultAsyncReducer from '../../utils/getDefaultAsyncReducer';
import getDefaultAsyncThunk from '../../utils/getDefaultAsyncThunk';

export const checkEmail = getDefaultAsyncThunk({
  actionType: ActionsType['users']['users/checkEmail'],
  apiMethodName: 'users.checkEmail',
});

export const checkEmailClear = createAction(ActionsType['users']['users/clear']);

export const checkEmailReducer = getDefaultAsyncReducer({
  name: ActionsType['users']['users/checkEmail'],
  action: checkEmail,
  clearAction: checkEmailClear,
}).reducer;
