import { useState } from 'react';

import { ErrorType } from '../api/base.api';

export function useRequest<Resp, Req>(requestFn: (data: Req) => Promise<Resp>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<Resp | null>(null);

  const makeRequest = async (data: Req) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await requestFn(data);
      setResponse(response);
    } catch (error) {
      const { message } = error as ErrorType;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { makeRequest, response, isLoading, error };
}
