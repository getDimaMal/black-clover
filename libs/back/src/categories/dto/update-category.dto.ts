import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @Length(3, 48)
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @IsOptional()
  @Length(0, 1000)
  @Transform(({ value }: TransformFnParams) => value?.trim() || '')
  @ApiPropertyOptional({ type: String })
  description: string;
}