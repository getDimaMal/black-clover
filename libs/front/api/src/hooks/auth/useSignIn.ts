import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useSignIn() {
  const { users } = useApi();
  const { makeRequest: signIn, response: user, isLoading, error } = useRequest(users.signIn);

  return { signIn, user, isLoading, error };
}
