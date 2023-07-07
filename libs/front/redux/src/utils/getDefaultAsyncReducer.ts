import { Statuses } from '@black-clover/front/shared/types/base.type';
import { Action, AsyncThunk, createSlice } from '@reduxjs/toolkit';

import { APIError, APIThunk } from '../api/api';
import { TAllActionTypes } from '../types/actions.type';
import { AsyncThunkConfig } from '../types/redux-toolkit.type';

type TGetDefaultReducer<Args, Resp, Extra, Type> = {
  name: Type & string;
  action: AsyncThunk<Resp, Args, AsyncThunkConfig<Extra, APIError>>;
} & Partial<{
  clearAction: Action;
}>;

type State<Resp> = {
  status: Statuses;
  response: null | Resp;
  error: null | APIError;
};

const getDefaultAsyncReducer = <Args, Resp, Extra = APIThunk, Type = TAllActionTypes>({
  name,
  action,
  clearAction,
}: TGetDefaultReducer<Args, Resp, Extra, Type>) => {
  const initialState: State<Resp> = {
    status: Statuses.idle,
    response: null,
    error: null,
  };

  return createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(action.pending, (state) => {
          state.status = Statuses.pending;
        })
        .addCase(action.rejected, (state, action) => {
          state.status = Statuses.error;
          state.error = action.payload || null;
        })
        .addCase(action.fulfilled, (state, action) => {
          const newState: State<Resp> = {
            status: Statuses.success,
            response: action.payload,
            error: null,
          };
          return newState;
        });

      if (clearAction) builder.addCase(clearAction.type, () => initialState);
    },
  });
};

export default getDefaultAsyncReducer;
