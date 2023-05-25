import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from './dtos';
import { User } from './entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create({ email, password }: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    try {
      const user = this.repo.create({ email, hash });
      return await this.repo.save(user);
    } catch (error: any) {
      if (error?.errno === 19) throw new ConflictException('user already exists');

      throw new BadRequestException();
    }
  }

  async findOne(args: { id?: string; email?: string }): Promise<User> {
    const user = await this.repo.findOneBy({ ...args });

    if (!user) throw new NotFoundException('user not found');

    return user;
  }

  async update(id: string, updateUser: UpdateUserDto): Promise<User> {
    const user = await this.findOne({ id });
    const newUser = { ...user, ...updateUser };

    return await this.repo.save(newUser);
  }
}
