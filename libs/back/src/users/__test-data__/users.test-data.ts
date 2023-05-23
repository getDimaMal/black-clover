import { UserCreateDto, UserSelfDto, UserTokenDto, UserUpdateDto } from '../dtos';
import { User } from '../entities';

export const salt = 'mockedSalt';
export const hash = 'mockedHash';
export const token = 'mockedToken';

export const user: User = {
  id: 'userId',
  email: 'test@mail.com',
  firstName: null,
  lastName: null,
  hash: 'mockedHash',
};

export const userCreate: UserCreateDto = { email: 'test@example.com', password: 'password123' };

export const userUpdate: UserUpdateDto = { firstName: 'Tony', lastName: 'Stark' };

export const userToken: UserTokenDto = {
  id: 'userId',
  email: 'test@mail.com',
  firstName: 'Tony',
  lastName: 'Stark',
  accessToken: 'mockedAccessToken',
};

export const userSelf: UserSelfDto = {
  id: 'userId',
  email: 'test@mail.com',
  firstName: 'Tony',
  lastName: 'Stark',
};
