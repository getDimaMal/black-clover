import { BadRequestException, ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos';
import { User } from './entities';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create({ email, password }: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    try {
      this.logger.verbose(`Create USER with: ${JSON.stringify({ email, hash })}`);
      const user = this.repo.create({ email, hash });

      this.logger.verbose(`Save USER with: ${JSON.stringify(user)}`);
      return await this.repo.save(user);
    } catch (error: any) {
      if (error?.errno === 19) throw new ConflictException('user already exists');

      throw new BadRequestException();
    }
  }

  async findOne(args: { id?: string; email?: string }): Promise<User | null> {
    this.logger.verbose(`Find one USER with: ${JSON.stringify(args)}`);
    return await this.repo.findOneBy({ ...args });
  }
}
