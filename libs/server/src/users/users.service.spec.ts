import { BadRequestException, ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

const salt = 'salt';
const hash = 'hash';
const user = { id: '123', email: 'test@email.com', hash: 'hash' } as User;
const createUserDto: CreateUserDto = { email: 'test@email.com', password: 'pwd' };

jest.mock('bcrypt', () => ({
  genSalt: jest.fn().mockImplementation(() => Promise.resolve(salt)),
  hash: jest.fn().mockImplementation(() => Promise.resolve(hash)),
}));

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('create', () => {
    it('should create a new user and return the user object', async () => {
      jest.spyOn(userRepository, 'create').mockReturnValue(user);
      jest.spyOn(userRepository, 'save').mockResolvedValue(user);

      const result = await usersService.create(createUserDto);

      expect(bcrypt.genSalt).toHaveBeenCalled();
      expect(bcrypt.hash).toHaveBeenCalledWith(createUserDto.password, salt);
      expect(userRepository.create).toHaveBeenCalledWith({
        email: createUserDto.email,
        hash,
      });
      expect(userRepository.save).toHaveBeenCalledWith(user);
      expect(result).toEqual(user);
    });

    it('should throw ConflictException if user already exists', async () => {
      jest.spyOn(userRepository, 'create').mockReturnValue(user);
      jest.spyOn(userRepository, 'save').mockImplementation(() => Promise.reject({ code: 11000 }));

      await expect(usersService.create(createUserDto)).rejects.toThrow(ConflictException);
    });

    it('should throw BadRequestException for other errors', async () => {
      jest.spyOn(userRepository, 'create').mockReturnValue(user);
      jest.spyOn(userRepository, 'save').mockRejectedValue(new Error());

      await expect(usersService.create(createUserDto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('findOne', () => {
    it('should find and return a user by id', async () => {
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(user);

      const result = await usersService.findOne({ id: user.id });

      expect(userRepository.findOneBy).toHaveBeenCalledWith({ id: user.id });
      expect(result).toEqual(user);
    });

    it('should find and return a user by email', async () => {
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(user);

      const result = await usersService.findOne({ email: user.email });

      expect(userRepository.findOneBy).toHaveBeenCalledWith({ email: user.email });
      expect(result).toEqual(user);
    });

    it('should return null if user is not found', async () => {
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(null);

      const result = await usersService.findOne({ id: user.id });

      expect(userRepository.findOneBy).toHaveBeenCalledWith({ id: user.id });
      expect(result).toBeNull();
    });
  });
});
