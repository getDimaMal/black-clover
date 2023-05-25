import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches } from 'class-validator';

export class UserCreateDto {
  @IsEmail()
  @ApiProperty({ type: String })
  email: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'password should be min 8 chars with letters & numbers',
  })
  @ApiProperty({ type: String })
  password: string;
}
