import UsersApi from '../api/endpoints/users.api';

import { useApi } from './useApi';

describe('useApi', () => {
  it('should return api', () => {
    const api = useApi();

    expect(api.users).toBeInstanceOf(UsersApi);
  });
});
