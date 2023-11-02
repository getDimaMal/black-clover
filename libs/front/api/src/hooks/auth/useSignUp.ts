import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useSignUp() {
  const { users } = useApi();
  const { makeRequest: signUp, response: user, isLoading, error } = useRequest(users.signUp);

  return { signUp, user, isLoading, error };
}
