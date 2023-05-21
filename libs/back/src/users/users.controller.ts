import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

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

  @Get(':id')
  @UseGuards(AuthGuard())
  getUserById(@Param('id', ParseUUIDPipe) id: string): Promise<Omit<UserDto, 'accessToken'>> {
    return this.usersService.findOne({ id });
  }
}
