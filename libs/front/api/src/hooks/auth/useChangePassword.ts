import { useApi } from '../useApi';
import { useRequest } from '../useRequest';

export function useChangePassword() {
  const { users } = useApi();
  const { makeRequest: changePassword, response: user, isLoading, error } = useRequest(users.changePassword);

  return { changePassword, user, isLoading, error };
}
