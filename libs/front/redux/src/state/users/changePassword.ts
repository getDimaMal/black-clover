import { createAction } from '@reduxjs/toolkit';

import { ActionsType } from '../../types/actions.type';
import getDefaultAsyncReducer from '../../utils/getDefaultAsyncReducer';
import getDefaultAsyncThunk from '../../utils/getDefaultAsyncThunk';

export const changePassword = getDefaultAsyncThunk({
  actionType: ActionsType['users']['users/changePassword'],
  apiMethodName: 'users.changePassword',
});

export const changePasswordClear = createAction(ActionsType['users']['users/clear']);

export const changePasswordReducer = getDefaultAsyncReducer({
  name: ActionsType['users']['users/changePassword'],
  action: changePassword,
  clearAction: changePasswordClear,
}).reducer;
