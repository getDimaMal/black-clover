import { CreateUserDto, SelfUserDto, UpdateUserDto } from '@black-clover/back/users/dtos';

const email = 'test@email.com';

export const createUser: CreateUserDto = { email, password: 'password123' };

export const updateUser: UpdateUserDto = { firstName: 'Tony', lastName: 'Stark' };

export const selfUser: Omit<SelfUserDto, 'id'> = { email, firstName: null, lastName: null };
