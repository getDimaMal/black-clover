import UsersApi from './endpoints/users.api';
import BaseApi from './base.api';

const API = () => {
  //TODO Use .ENV
  const baseApi = new BaseApi('http://localhost:8000/api');

  return {
    users: new UsersApi(baseApi),
  };
};

export default API;
