import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { SelfUserDto } from '@black-clover/shared/dto/users/self-user.dto';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';
import { UpdateUserDto } from '@black-clover/shared/dto/users/update-user.dto';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Serialize } from '../core/interseptors/serialize.interceptor';

import { GetSelf } from './decorators/get-self.decorator';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @Post('/signup')
  @Serialize(TokenUserDto)
  signUp(@Body() body: CreateUserDto) {
    return this.authService.signUp(body);
  }

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @Serialize(TokenUserDto)
  signIn(@Body() body: CreateUserDto) {
    return this.authService.signIn(body);
  }

  @Get('/self')
  @Serialize(SelfUserDto)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  getSelf(@GetSelf() self: User) {
    return self;
  }

  @Put('/self')
  @Serialize(SelfUserDto)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  updateSelf(@Body() userUpdate: UpdateUserDto, @GetSelf() self: User) {
    return this.usersService.update(self.id, userUpdate);
  }
}
