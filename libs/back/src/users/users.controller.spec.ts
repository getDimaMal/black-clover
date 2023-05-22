import { Test, TestingModule } from '@nestjs/testing';

import { createUserDto, userDto } from './__test-data__/users.test-data';
import { AuthService } from './auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let authService: AuthService;

  const mockUsersService: Partial<UsersService> = {
    findOne: jest.fn(),
  };

  const mockAuthService: Partial<AuthService> = {
    signUp: jest.fn(),
    signIn: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: mockUsersService },
        { provide: AuthService, useValue: mockAuthService },
      ],
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
    it('should call authService.signIn and return the result', async () => {
      jest.spyOn(authService, 'signIn').mockResolvedValue(userDto);

      const result = await usersController.signIn(createUserDto);

      expect(authService.signIn).toHaveBeenCalledWith(createUserDto);
      expect(result).toEqual(userDto);
    });
  });
});
