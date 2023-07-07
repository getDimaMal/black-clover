import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { APIError, APIThunk } from '../api/api';
import { TAllActionTypes } from '../types/actions.type';
import { AsyncThunkConfig } from '../types/redux-toolkit.type';

export type FunctionParamsType<Func> = Func extends (...args: infer Param) => unknown ? Param[0] : never;
export type FunctionReturnType<Func> = Func extends (...args: infer Param) => infer Return ? Return : unknown;

type TGetDefaultAsyncThunk<ActionType, APIMethodName> = {
  actionType: ActionType & string;
  apiMethodName: APIMethodName;
};

type Awaited<T> = T extends PromiseLike<infer R> ? R : T;
type ThunkReturn<Resp, Args, Extra> = AsyncThunk<Awaited<Resp>, Args, AsyncThunkConfig<Extra, APIError>>;

const getDefaultAsyncThunk = <
  Extra = APIThunk,
  ActionType = TAllActionTypes,
  APIDomain extends keyof Extra = keyof Extra,
  APIMethod extends keyof Extra[APIDomain] = keyof Extra[APIDomain],
  APIMethodName extends `${APIDomain & string}.${APIMethod & string}` = `${APIDomain & string}.${APIMethod & string}`,
  Args extends FunctionParamsType<Extra[APIDomain][APIMethod]> = FunctionParamsType<Extra[APIDomain][APIMethod]>,
  Resp extends FunctionReturnType<Extra[APIDomain][APIMethod]> = FunctionReturnType<Extra[APIDomain][APIMethod]>
>({
  actionType,
  apiMethodName,
}: TGetDefaultAsyncThunk<ActionType, APIMethodName>): ThunkReturn<Resp, Args, Extra> => {
  const payloadCreator: AsyncThunkPayloadCreator<unknown, Args, AsyncThunkConfig<Extra, APIError>> = async (
    args,
    thunkAPI
  ) => {
    const [apiDomain, apiMethod] = apiMethodName.split('.') as [APIDomain, APIMethod];

    try {
      const method = thunkAPI.extra[apiDomain][apiMethod];
      if (typeof method === 'function') {
        const result = (await method.call(thunkAPI.extra[apiDomain], args)) as Promise<Resp>;
        return thunkAPI.fulfillWithValue(result);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) return thunkAPI.rejectWithValue(error.response?.data);
    }
  };

  return createAsyncThunk(actionType, payloadCreator) as ThunkReturn<Resp, Args, Extra>;
};

export default getDefaultAsyncThunk;
