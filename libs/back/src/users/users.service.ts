import { BadRequestException, ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

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
      return this.repo.save(user);
    } catch (error: any) {
      if (error?.code === 'SQLITE_CONSTRAINT') throw new ConflictException('user already exists');

      throw new BadRequestException();
    }
  }

  async findOne(args: { id?: string; email?: string }): Promise<User> {
    this.logger.verbose(`Find one USER with: ${JSON.stringify(args)}`);
    const user = await this.repo.findOneBy({ ...args });
    if (!user) throw new NotFoundError('user not found');
    return user;
  }
}