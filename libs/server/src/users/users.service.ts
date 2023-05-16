import { BadRequestException, ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  async create({ email, password }: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    this.logger.verbose(`Create USER with: ${JSON.stringify({ email, hash })}`);
    const user = this.repository.create({ email, hash });

    try {
      this.logger.verbose(`Save USER with: ${JSON.stringify(user)}`);
      return await this.repository.save(user);
    } catch (error) {
      if (error.code === 11000) throw new ConflictException('user already exists');

      throw new BadRequestException();
    }
  }

  async findOne(args: { id?: string; email?: string }): Promise<User | null> {
    this.logger.verbose(`Find one USER with: ${JSON.stringify(args)}`);
    return await this.repository.findOneBy(args);
  }

  async findList(): Promise<User[]> {
    this.logger.verbose(`Find list of USERs with: {}`);
    return await this.repository.find();
  }
}
