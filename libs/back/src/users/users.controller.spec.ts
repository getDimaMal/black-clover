import { Test, TestingModule } from '@nestjs/testing';

import { user, userCreate, userSelf, userToken, userUpdate } from './__test-data__/users.test-data';
import { AuthService } from './auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let authService: AuthService;

  const mockUsersService: Partial<UsersService> = {
    update: jest.fn().mockResolvedValue(userSelf),
  };

  const mockAuthService: Partial<AuthService> = {
    signUp: jest.fn().mockResolvedValue(userToken),
    signIn: jest.fn().mockResolvedValue(userToken),
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
    usersService = module.get<UsersService>(UsersService);
    authService = module.get<AuthService>(AuthService);
  });

  describe('signUp', () => {
    it('should call authService.signUp and return the result', async () => {
      const result = await usersController.signUp(userCreate);

      expect(authService.signUp).toHaveBeenCalledWith(userCreate);
      expect(result).toEqual(userToken);
    });
  });

  describe('signIn', () => {
    it('should call authService.signIn and return the result', async () => {
      const result = await usersController.signIn(userCreate);

      expect(authService.signIn).toHaveBeenCalledWith(userCreate);
      expect(result).toEqual(userToken);
    });
  });

  describe('update', () => {
    it('should call usersService.update and return the result', async () => {
      const result = await usersController.selfUpdate(userUpdate, user);

      expect(usersService.update).toHaveBeenCalledWith(user.id, userUpdate);
      expect(result).toEqual(userSelf);
    });
  });
});
