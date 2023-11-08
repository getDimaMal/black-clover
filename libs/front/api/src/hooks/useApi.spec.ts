import CategoriesApi from '../api/endpoints/categories.api';
import UsersApi from '../api/endpoints/users.api';
import WorkspacesApi from '../api/endpoints/workspaces.api';

import { useApi } from './useApi';

describe('useApi', () => {
  it('should return api', () => {
    const api = useApi();

    expect(api.users).toBeInstanceOf(UsersApi);
    expect(api.categories).toBeInstanceOf(CategoriesApi);
    expect(api.workspaces).toBeInstanceOf(WorkspacesApi);
  });
});
