import { CreateUserDto, SelfUserDto, TokenUserDto, UpdateUserDto } from '../dtos';
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

export const createUser: CreateUserDto = { email: 'test@example.com', password: 'password123' };

export const updateUser: UpdateUserDto = { firstName: 'Tony', lastName: 'Stark' };

export const tokenUser: TokenUserDto = {
  id: 'userId',
  email: 'test@mail.com',
  firstName: 'Tony',
  lastName: 'Stark',
  accessToken: 'mockedAccessToken',
};

export const selfUser: SelfUserDto = {
  id: 'userId',
  email: 'test@mail.com',
  firstName: 'Tony',
  lastName: 'Stark',
};
