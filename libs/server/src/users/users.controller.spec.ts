import { Test } from '@nestjs/testing';

import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UsersController } from './users.controller';

const createUserDto: CreateUserDto = { email: 'test@email.com', password: 'pwd' };
const userDto: UserDto = { id: '123', email: 'test@email.com', accessToken: 'token' };

describe('UsersController', () => {
  let usersController: UsersController;
  let authService: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: AuthService, useValue: { signUp: jest.fn(), signIn: jest.fn() } }],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('signUp', () => {
    it('should call authService.signUp and return the result', async () => {
      jest.spyOn(authService, 'signUp').mockResolvedValue(userDto);

      const result = await usersController.signUp(createUserDto);

      expect(authService.signUp).toHaveBeenCalledWith(createUserDto);
      expect(result).toEqual(userDto);
    });
  });

  describe('signIn', () => {
    it('should call authService.signIn and return the result with HTTP status 200', async () => {
      jest.spyOn(authService, 'signIn').mockResolvedValue(userDto);

      const result = await usersController.signIn(createUserDto);

      expect(authService.signIn).toHaveBeenCalledWith(createUserDto);
      expect(result).toEqual(userDto);
    });
  });
});
