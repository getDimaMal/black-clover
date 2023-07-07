import React from 'react';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';

import { store } from './store/store';
import getDefaultAsyncReducer from './utils/getDefaultAsyncReducer';
import getDefaultAsyncThunk, { FunctionParamsType, FunctionReturnType } from './utils/getDefaultAsyncThunk';

type Extra = typeof mockApi;
type Action = 'test/action';
type APIDomain = keyof Extra;
type APIMethod = keyof Extra[APIDomain];
type APIMethodName = `${APIDomain}.${APIMethod}`;
type Args = FunctionParamsType<Extra[APIDomain][APIMethod]>;
type Resp = FunctionReturnType<Extra[APIDomain][APIMethod]>;

export const mockApi = {
  apiDomain: { apiMethod: jest.fn() },
};

export const mockGetAsyncThunk = getDefaultAsyncThunk<Extra, Action, APIDomain, APIMethod, APIMethodName, Args, Resp>;

export const mockGetDefaultAsyncReducer = getDefaultAsyncReducer<Args, Resp, Extra, Action>;

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const customRenderHook: typeof renderHook = (hook, options) => {
  return renderHook(hook, { wrapper: Wrapper, ...options });
};
