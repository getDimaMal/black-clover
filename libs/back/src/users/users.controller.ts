import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { Serialize } from '../core/interseptors/serialize.interceptor';

import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@Serialize(UserDto)
@Controller('users')
export class UsersController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @Post('/signup')
  signUp(@Body() body: CreateUserDto): Promise<UserDto> {
    return this.authService.signUp(body);
  }

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: CreateUserDto): Promise<UserDto> {
    return this.authService.signIn(body);
  }
}
