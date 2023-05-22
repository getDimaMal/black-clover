import { CreateUserDto, UserDto } from '../dtos';
import { User } from '../entities';

export const salt = 'mockedSalt';
export const hash = 'mockedHash';
export const token = 'mockedToken';

export const user: User = { id: 'mockedUserId', email: 'test@mail.com', hash: 'mockedHash' };

export const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123' };

export const userDto: UserDto = { id: 'mockedUserId', email: 'test@mail.com', accessToken: 'mockedAccessToken' };
