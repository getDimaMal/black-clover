import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useResetPassword() {
  const { users } = useApi();
  const { makeRequest: resetPassword, response: user, isLoading, error } = useRequest(users.checkEmail);

  return { resetPassword, user, isLoading, error };
}
