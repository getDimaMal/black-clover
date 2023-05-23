import { Transform, TransformFnParams } from 'class-transformer';
import { IsOptional, IsString, Length } from 'class-validator';

export class UserUpdateDto {
  @IsString()
  @IsOptional()
  @Length(3, 24)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  firstName: string;

  @IsString()
  @IsOptional()
  @Length(3, 24)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  lastName: string;
}
