import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { Serialize } from '../interseptors/serialize.interceptor';

import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';

@Serialize(UserDto)
@Controller('users')
export class UsersController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() body: CreateUserDto): Promise<UserDto> {
    return this.authService.signUp(body);
  }

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: CreateUserDto) {
    return this.authService.signIn(body);
  }
}
