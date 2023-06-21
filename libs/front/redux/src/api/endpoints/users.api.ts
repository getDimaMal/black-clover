import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import BaseApi from '../base.api';

class UsersApi {
  constructor(private baseApi: BaseApi) {}

  async signUp(data: CreateUserDto) {
    const result = await this.baseApi.post('/users/signUp', data);
    console.log(result);
  }
}

export default UsersApi;
