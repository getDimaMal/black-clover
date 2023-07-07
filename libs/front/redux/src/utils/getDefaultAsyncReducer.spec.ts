import { Statuses } from '@black-clover/front/shared/types/base.type';
import { createAction } from '@reduxjs/toolkit';

import { mockGetAsyncThunk, mockGetDefaultAsyncReducer } from '../test-utils';

const testAction = mockGetAsyncThunk({ actionType: 'test/action', apiMethodName: 'apiDomain.apiMethod' });
const clearAction = createAction('test/action/clear');

describe('getDefaultAsyncReducer', () => {
  let mockReducer: ReturnType<typeof mockGetDefaultAsyncReducer>;

  beforeEach(() => {
    mockReducer = mockGetDefaultAsyncReducer({ name: 'test/action', action: testAction });
  });

  it('should set status pending', () => {
    const state = mockReducer.reducer(undefined, { type: 'test/action/pending' });

    expect(state).toEqual({ status: Statuses.pending, response: null, error: null });
  });

  it('should set status success', () => {
    const payload = 'response data';
    const state = mockReducer.reducer(undefined, { type: 'test/action/fulfilled', payload });

    expect(state).toEqual({ status: Statuses.success, response: payload, error: null });
  });

  it.each<[string, null | string]>([
    ['error is NULL', null],
    ['error has value', 'error response'],
  ])('should set status rejected when: %s', (_, payload) => {
    const state = mockReducer.reducer(undefined, { type: 'test/action/rejected', payload });

    expect(state).toEqual({ status: Statuses.error, response: null, error: payload });
  });

  it('should call clearAction', () => {
    const mockReducer = mockGetDefaultAsyncReducer({ name: 'test/action', action: testAction, clearAction });

    const payload = 'some data';
    const state1 = mockReducer.reducer(undefined, { type: 'test/action/fulfilled', payload });
    const state2 = mockReducer.reducer(state1, clearAction());

    expect(state1).toEqual({ status: Statuses.success, response: payload, error: null });
    expect(state2).toEqual({ status: Statuses.idle, response: null, error: null });
  });
});
