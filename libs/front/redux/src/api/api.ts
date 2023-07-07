import UsersApi from './endpoints/users.api';
import BaseApi from './base.api';

//TODO Move to Shared lib
export type APIThunk = ReturnType<typeof API>;

//TODO Move to Shared lib
export type APIError = {
  statusCode: number;
  message: string;
  error: string;
};

const API = () => {
  //TODO Use .ENV
  const baseApi = new BaseApi('http://localhost:8000/api');

  return {
    users: new UsersApi(baseApi),
  };
};

export default API;
