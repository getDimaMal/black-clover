import BaseApi from '../api/base.api';
import UsersApi from '../api/endpoints/users.api';

export function useApi() {
  //TODO Use .ENV
  const baseApi = new BaseApi('http://localhost:8000/api');

  return {
    users: new UsersApi(baseApi),
  };
}
