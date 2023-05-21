import { BadRequestException, ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

const salt = 'mockedSalt';
const hash = 'mockedHash';
const user: User = { id: 'mockedUserId', email: 'test@mail.com', hash: 'mockedHash' };
const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123' };

jest.mock('bcrypt');

describe('UsersService', () => {
  let usersService: UsersService;

  const mockRepository: Partial<Repository<User>> = {
    create: jest.fn(),
    save: jest.fn(),
    findOneBy: jest.fn(),
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

      jest.spyOn(mockRepository, 'create').mockReturnValue(user);
      jest.spyOn(mockRepository, 'save').mockResolvedValue(user);

      const result = await usersService.create(createUserDto);

      expect(mockRepository.create).toHaveBeenCalledWith({ email: createUserDto.email, hash });
      expect(mockRepository.save).toHaveBeenCalledWith(user);
      expect(result).toEqual(user);
    });

    it('should throw ConflictException if user already exists', async () => {
      jest.spyOn(mockRepository, 'create').mockReturnValue(user);
      jest.spyOn(mockRepository, 'save').mockRejectedValue({ errno: 19 });

      await expect(usersService.create(createUserDto)).rejects.toThrow(ConflictException);
    });

    it('should throw BadRequestException for other errors', async () => {
      jest.spyOn(mockRepository, 'create').mockReturnValue(user);
      jest.spyOn(mockRepository, 'save').mockImplementation(() => Promise.reject());

      await expect(usersService.create(createUserDto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('findOne', () => {
    it('should find a user by id', async () => {
      jest.spyOn(mockRepository, 'findOneBy').mockImplementation(() => Promise.resolve(user));

      const result = await usersService.findOne({ id: user.id });

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual(user);
    });

    it('should find a user by email', async () => {
      jest.spyOn(mockRepository, 'findOneBy').mockImplementation(() => Promise.resolve(user));

      const result = await usersService.findOne({ email: user.email });

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ email: user.email });
      expect(result).toEqual(user);
    });

    it('should throw NotFoundException if user is not found', async () => {
      jest.spyOn(mockRepository, 'findOneBy').mockImplementation(() => Promise.resolve(null));

      await expect(usersService.findOne({ email: user.email })).rejects.toThrow(NotFoundError);
      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ email: user.email });
    });
  });
});
