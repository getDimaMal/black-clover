import { IsString } from 'class-validator';

import { IsPassword } from '../../decorators/validations.decorator';

export class ResetPasswordDto {
  @IsString()
  token: string;

  @IsPassword()
  password: string;
}
