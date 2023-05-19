import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dtos/create-user.dto';
import { JwtDto } from './dtos/jwt.dto';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  getToken(email: string): string {
    const payload: JwtDto = { email };
    return this.jwtService.sign(payload);
  }

  async signUp(args: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.create(args);
    const accessToken = this.getToken(user.email);

    return { ...user, accessToken };
  }

  async signIn({ email, password }: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.findOne({ email });

    if (user && (await bcrypt.compare(password, user.hash))) {
      const accessToken = this.getToken(user.email);

      return { ...user, accessToken };
    }
    throw new UnauthorizedException('please check your credentials');
  }
}
