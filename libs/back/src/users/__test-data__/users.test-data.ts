import { CreateUserDto } from '../dtos/create-user.dto';
import { UserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

export const salt = 'mockedSalt';
export const hash = 'mockedHash';
export const token = 'mockedToken';

export const user: User = { id: 'mockedUserId', email: 'test@mail.com', hash: 'mockedHash' };

export const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123' };

export const userDto: UserDto = { id: 'mockedUserId', email: 'test@mail.com', accessToken: 'mockedAccessToken' };
