import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import axios from 'axios';

import { baseURL } from '../../../jest.setup';
import BaseApi from '../base.api';

import UsersApi from './users.api';

describe('UsersApi', () => {
  let Api: UsersApi;

  const root = '/users';
  const body: CreateUserDto = { email: 'email@mail.com', password: 'passwrd123' };

  beforeEach(() => {
    Api = new UsersApi(new BaseApi(baseURL));
  });

  it('should make signUp request', async () => {
    await Api.signUp(body);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(`${root}/signUp`, body);
  });

  it('should make signIn request', async () => {
    await Api.signIn(body);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(`${root}/signIn`, body);
  });

  it('should make checkEmail request', async () => {
    const body: CheckEmailDto = { email: 'email@mail.com' };
    await Api.checkEmail(body);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(`${root}/checkEmail`, body);
  });
});
