import { BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { createUser, hash, salt, updateUser, user } from './__test-data__/users.test-data';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

jest.mock('bcrypt');

describe('UsersService', () => {
  let usersService: UsersService;

  const mockRepository: Partial<Repository<User>> = {
    create: jest.fn().mockReturnValue(user),
    save: jest.fn().mockResolvedValue(user),
    findOneBy: jest.fn().mockResolvedValue(user),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, { provide: getRepositoryToken(User), useValue: mockRepository }],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  describe('create', () => {
    it('should create a new user with hashed password', async () => {
      jest.spyOn(bcrypt, 'genSalt').mockImplementation(() => salt);
      jest.spyOn(bcrypt, 'hash').mockImplementation(() => hash);

      const result = await usersService.create(createUser);

      expect(mockRepository.create).toHaveBeenCalledWith({ email: createUser.email, hash });
      expect(mockRepository.save).toHaveBeenCalledWith(user);
      expect(result).toEqual(user);
    });

    it('should throw ConflictException if user already exists', async () => {
      jest.spyOn(mockRepository, 'save').mockRejectedValue({ errno: 19 });

      await expect(usersService.create(createUser)).rejects.toThrow(ConflictException);
    });

    it('should throw BadRequestException for other errors', async () => {
      jest.spyOn(mockRepository, 'save').mockImplementation(() => Promise.reject());

      await expect(usersService.create(createUser)).rejects.toThrow(BadRequestException);
    });
  });

  describe('findOne', () => {
    it('should find a user by id', async () => {
      const result = await usersService.findOne({ id: user.id });

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual(user);
    });

    it('should find a user by email', async () => {
      const result = await usersService.findOne({ email: user.email });

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ email: user.email });
      expect(result).toEqual(user);
    });

    it('should throw NotFoundException when user is not found', async () => {
      jest.spyOn(mockRepository, 'findOneBy').mockResolvedValue(null);

      try {
        await usersService.findOne({ email: user.email });
      } catch (error) {
        expect(mockRepository.findOneBy).toHaveBeenCalledWith({ email: user.email });
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('update', () => {
    it('should find and update the user', async () => {
      const newUser = { ...user, ...updateUser };
      jest.spyOn(usersService, 'findOne').mockResolvedValue(user);
      jest.spyOn(mockRepository, 'save').mockResolvedValue(newUser);

      const result = await usersService.update(user.id, updateUser);

      expect(usersService.findOne).toHaveBeenCalledWith({ id: user.id });
      expect(mockRepository.save).toHaveBeenCalledWith(newUser);
      expect(result).toEqual(newUser);
    });
  });
});
