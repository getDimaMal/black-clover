import { UserCreateDto, UserUpdateDto } from '@black-clover/back/users/dtos';

export const userCreate: UserCreateDto = { email: 'test@email.com', password: 'password123' };

export const getUserUpdate = (props: Partial<UserUpdateDto> = {}): UserUpdateDto => ({
  firstName: 'Tony',
  lastName: 'Stark',
  ...props,
});
