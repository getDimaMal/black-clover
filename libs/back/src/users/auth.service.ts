import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto, UserDto } from './dtos';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  getToken(id: string): string {
    return this.jwtService.sign({ id });
  }

  async signUp(args: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.create(args);
    const accessToken = this.getToken(user.id);

    return { ...user, accessToken };
  }

  async signIn({ email, password }: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.findOne({ email });

    if (user && (await bcrypt.compare(password, user.hash))) {
      const accessToken = this.getToken(user.id);

      return { ...user, accessToken };
    }
    throw new UnauthorizedException('please check your credentials');
  }
}
