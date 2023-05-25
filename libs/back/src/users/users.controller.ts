import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { Serialize } from '../core/interseptors/serialize.interceptor';

import { GetSelf } from './decorators/get-self.decorator';
import { AuthService } from './auth.service';
import { UserCreateDto, UserSelfDto, UserTokenDto, UserUpdateDto } from './dtos';
import { User } from './entities';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @Post('/signup')
  @Serialize(UserTokenDto)
  @ApiCreatedResponse({ description: 'Created' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  signUp(@Body() body: UserCreateDto): Promise<UserTokenDto> {
    return this.authService.signUp(body);
  }

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @Serialize(UserTokenDto)
  @ApiOkResponse({ description: 'OK' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  signIn(@Body() body: UserCreateDto): Promise<UserTokenDto> {
    return this.authService.signIn(body);
  }

  @Get('/self')
  @Serialize(UserSelfDto)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: 'OK' })
  @ApiForbiddenResponse({ description: 'Unauthorized' })
  getSelf(@GetSelf() self: User): UserSelfDto {
    return self;
  }

  @Put('/self')
  @Serialize(UserSelfDto)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOkResponse({ description: 'OK' })
  @ApiForbiddenResponse({ description: 'Unauthorized' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  updateSelf(@Body() userUpdate: UserUpdateDto, @GetSelf() self: User): Promise<UserSelfDto> {
    return this.usersService.update(self.id, userUpdate);
  }
}
