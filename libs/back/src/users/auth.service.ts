import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  getToken(id: string): string {
    return this.jwtService.sign({ id });
  }

  async signUp(createUser: CreateUserDto): Promise<TokenUserDto> {
    const user = await this.usersService.create(createUser);
    const accessToken = this.getToken(user.id);

    return { ...user, accessToken };
  }

  async signIn({ email, password }: CreateUserDto): Promise<TokenUserDto> {
    try {
      const user = await this.usersService.findOne({ email });
      const isPasswordValid = await bcrypt.compare(password, user.hash);

      if (isPasswordValid) {
        const accessToken = this.getToken(user.id);
        return { ...user, accessToken };
      }
    } catch {
      throw new UnauthorizedException('please check your credentials');
    }
    throw new UnauthorizedException('please check your credentials');
  }
}
