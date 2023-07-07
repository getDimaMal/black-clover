import { configureStore, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { mockApi, mockGetAsyncThunk } from '../test-utils';

const testAction = mockGetAsyncThunk({ actionType: 'test/action', apiMethodName: 'apiDomain.apiMethod' });

const mockReducer = createReducer({}, testAction);

const store = configureStore({
  reducer: mockReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: mockApi } }),
});

describe('getDefaultAsyncThunk', () => {
  it('should call apiMethod1 with fulfilled', async () => {
    const { type } = await store.dispatch(testAction(null));

    expect(mockApi.apiDomain.apiMethod).toHaveBeenCalledTimes(1);
    expect(type).toContain('fulfilled');
  });

  it('should call apiMethod with rejected', async () => {
    mockApi.apiDomain.apiMethod.mockRejectedValueOnce(new Error());
    jest.spyOn(axios, 'isAxiosError').mockReturnValue(true);

    const { type } = await store.dispatch(testAction(null));

    expect(mockApi.apiDomain.apiMethod).toHaveBeenCalledTimes(1);
    expect(type).toContain('rejected');
  });
});
