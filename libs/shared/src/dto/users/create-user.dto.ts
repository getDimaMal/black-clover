import { IsEmail } from 'class-validator';

import { IsPassword } from '../../decorators/validations.decorator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsPassword()
  password: string;
}
