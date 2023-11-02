import { AxiosError } from 'axios';

import { act, renderHook } from '../../jest.setup';
import { ErrorType } from '../api/base.api';

import { useRequest } from './useRequest';

describe('useRequest', () => {
  it('should return init values', () => {
    const { result } = renderHook(() => useRequest(jest.fn()));

    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(false);

    expect(result.current.response).toBe(null);
  });

  describe('request function', () => {
    it('should handle a successful request', async () => {
      const response = 'Success';
      const requestFn = jest.fn().mockResolvedValue(response);
      const { result, waitForNextUpdate } = renderHook(() => useRequest(requestFn));

      act(() => {
        result.current.makeRequest({});
      });

      expect(result.current.isLoading).toBe(true);

      await waitForNextUpdate();

      expect(result.current.response).toBe(response);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it('should handle a failed request', async () => {
      const errorMessage = 'Error Message';
      const requestFn = jest.fn().mockRejectedValue({ message: errorMessage } as AxiosError<ErrorType>);
      const { result, waitForNextUpdate } = renderHook(() => useRequest(requestFn));

      act(() => {
        result.current.makeRequest({});
      });

      expect(result.current.isLoading).toBe(true);

      await waitForNextUpdate();

      expect(result.current.response).toBeNull();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(errorMessage);
    });
  });
});
