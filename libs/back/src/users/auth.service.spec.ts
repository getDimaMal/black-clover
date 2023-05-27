import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';

import { createUser, token, user } from './test-data/users.test-data';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

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
      const result = await authService.signUp(createUser);

      expect(mockUsersService.create).toHaveBeenCalledWith(createUser);
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual({ ...user, accessToken: token });
    });
  });

  describe('signIn', () => {
    it('should return the user object with access token if credentials are valid', async () => {
      const compareMock = jest.spyOn(bcrypt, 'compare').mockImplementation(() => Promise.resolve(true));

      const result = await authService.signIn(createUser);

      expect(mockUsersService.findOne).toHaveBeenCalledWith({ email: createUser.email });
      expect(compareMock).toHaveBeenCalledWith(createUser.password, user.hash);
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual({ ...user, accessToken: token });
    });

    it('should throw UnauthorizedException if credentials are invalid', async () => {
      const compareMock = jest.spyOn(bcrypt, 'compare');
      compareMock.mockImplementation(() => Promise.resolve(false));

      await expect(authService.signIn(createUser)).rejects.toThrow(UnauthorizedException);

      expect(mockUsersService.findOne).toHaveBeenCalledWith({ email: createUser.email });
      expect(compareMock).toHaveBeenCalledWith(createUser.password, user.hash);
    });
  });
});
