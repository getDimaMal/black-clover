import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos';
import { User } from './user.entity';
import { UsersService } from './users.service';

const accessToken = 'accessToken';
const user = { id: '123', email: 'test@email.com', hash: 'pwd-hash' } as User;
const createUserDto = { email: 'test@email.com', password: 'pwd' } as CreateUserDto;

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: { create: jest.fn(), findOne: jest.fn() } },
        { provide: JwtService, useValue: { sign: jest.fn() } },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  describe('signUp', () => {
    it('should create a new user and return user with access token', async () => {
      jest.spyOn(usersService, 'create').mockResolvedValue(user);
      jest.spyOn(authService, 'getToken').mockReturnValue(accessToken);

      const result = await authService.signUp(createUserDto);

      expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      expect(authService.getToken).toHaveBeenCalledWith(user.email);
      expect(result).toEqual({ ...user, accessToken });
    });
  });

  describe('signIn', () => {
    it('should return user with access token if credentials are correct', async () => {
      jest.spyOn(bcrypt, 'compare').mockImplementation(() => Promise.resolve(true));
      jest.spyOn(usersService, 'findOne').mockResolvedValue(user);
      jest.spyOn(authService, 'getToken').mockReturnValue(accessToken);

      const result = await authService.signIn(createUserDto);

      expect(usersService.findOne).toHaveBeenCalledWith({ email: createUserDto.email });
      expect(bcrypt.compare).toHaveBeenCalledWith(createUserDto.password, user.hash);
      expect(authService.getToken).toHaveBeenCalledWith(user.email);
      expect(result).toEqual({ ...user, accessToken });
    });

    it('should throw UnauthorizedException if credentials are incorrect', async () => {
      jest.spyOn(usersService, 'findOne').mockResolvedValue(user);
      jest.spyOn(bcrypt, 'compare').mockImplementation(() => Promise.resolve(false));

      await expect(authService.signIn(createUserDto)).rejects.toThrow(UnauthorizedException);

      expect(usersService.findOne).toHaveBeenCalledWith({ email: createUserDto.email });
      expect(bcrypt.compare).toHaveBeenCalledWith(createUserDto.password, user.hash);
    });
  });
});
