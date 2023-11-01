import { ChangePasswordDto } from '@black-clover/shared/dto/users/change-password.dto';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';
import { AxiosResponse } from 'axios';

import BaseApi from '../base.api';

class UsersApi {
  constructor(private baseApi: BaseApi) {}

  async signIn(body: CreateUserDto) {
    const { data }: AxiosResponse<TokenUserDto> = await this.baseApi.post('/users/signIn', body);
    return data;
  }

  async signUp(body: CreateUserDto) {
    const { data }: AxiosResponse<TokenUserDto> = await this.baseApi.post('/users/signUp', body);
    return data;
  }

  async checkEmail(body: CheckEmailDto) {
    const { data }: AxiosResponse<{ token: string }> = await this.baseApi.post('/users/checkEmail', body);
    return data;
  }

  async changePassword(body: ChangePasswordDto) {
    const { data }: AxiosResponse<TokenUserDto> = await this.baseApi.post('/users/changePassword', body);
    return data;
  }
}

export default UsersApi;
