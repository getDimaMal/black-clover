import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  @Min(9)
  @Max(999999)
  @ApiProperty({ type: Number })
  totalPrice: number;

  @IsNumber()
  @Min(30)
  @Max(365)
  @ApiProperty({ type: Number })
  amountOfDays: number;

  @IsNumber()
  @Min(1)
  @Max(1000)
  @ApiProperty({ type: Number })
  amountOfMembers: number;
}
