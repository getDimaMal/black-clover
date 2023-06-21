import UsersApi from './endpoints/users.api';
import BaseApi from './base.api';

const Api = (baseURL: string) => {
  const baseApi = new BaseApi(baseURL);

  return {
    users: new UsersApi(baseApi),
  };
};

export default Api;
