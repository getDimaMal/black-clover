import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

const token = 'mockedToken';
const user: User = { id: '123', email: 'test@mail.com', hash: 'hash' };
const createUserDto: CreateUserDto = { email: 'test@mail.com', password: 'test-password' };

jest.mock('bcrypt');

describe('AuthService', () => {
  let authService: AuthService;

  const mockUsersService: Partial<UsersService> = {
    create: jest.fn().mockReturnValue(user),
    findOne: jest.fn().mockResolvedValue(user),
  };

  const mockJwtService: Partial<JwtService> = {
    sign: jest.fn().mockReturnValue(token),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe('getToken', () => {
    it('should return a JWT token', () => {
      const result = authService.getToken(user.id);

      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual(token);
    });
  });

  describe('signUp', () => {
    it('should create a new user and return the user object with access token', async () => {
      const result = await authService.signUp(createUserDto);

      expect(mockUsersService.create).toHaveBeenCalledWith(createUserDto);
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual({ ...user, accessToken: token });
    });
  });

  describe('signIn', () => {
    it('should return the user object with access token if credentials are valid', async () => {
      const compareMock = jest.spyOn(bcrypt, 'compare');
      compareMock.mockImplementation(() => Promise.resolve(true));

      const result = await authService.signIn(createUserDto);

      expect(mockUsersService.findOne).toHaveBeenCalledWith({ email: createUserDto.email });
      expect(compareMock).toHaveBeenCalledWith(createUserDto.password, user.hash);
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual({ ...user, accessToken: token });
    });

    it('should throw UnauthorizedException if credentials are invalid', async () => {
      const compareMock = jest.spyOn(bcrypt, 'compare');
      compareMock.mockImplementation(() => Promise.resolve(false));

      await expect(authService.signIn(createUserDto)).rejects.toThrow(UnauthorizedException);

      expect(mockUsersService.findOne).toHaveBeenCalledWith({ email: createUserDto.email });
      expect(compareMock).toHaveBeenCalledWith(createUserDto.password, user.hash);
    });
  });
});
