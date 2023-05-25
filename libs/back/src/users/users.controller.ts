import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Serialize } from '../core/interseptors/serialize.interceptor';

import { GetSelf } from './decorators/get-self.decorator';
import { AuthService } from './auth.service';
import { CreateUserDto, SelfUserDto, TokenUserDto, UpdateUserDto } from './dto';
import { User } from './entities';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @Post('/signup')
  @Serialize(TokenUserDto)
  signUp(@Body() body: CreateUserDto): Promise<TokenUserDto> {
    return this.authService.signUp(body);
  }

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @Serialize(TokenUserDto)
  signIn(@Body() body: CreateUserDto): Promise<TokenUserDto> {
    return this.authService.signIn(body);
  }

  @Get('/self')
  @Serialize(SelfUserDto)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  getSelf(@GetSelf() self: User): SelfUserDto {
    return self;
  }

  @Put('/self')
  @Serialize(SelfUserDto)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  updateSelf(@Body() userUpdate: UpdateUserDto, @GetSelf() self: User): Promise<SelfUserDto> {
    return this.usersService.update(self.id, userUpdate);
  }
}
