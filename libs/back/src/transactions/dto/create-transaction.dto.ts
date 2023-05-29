import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  Max,
  Min,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'NotNullTogather', async: false })
export class NotNullTogather implements ValidatorConstraintInterface {
  validate(value: null | number, args: ValidationArguments) {
    const otherFieldValue = (args.object as never)[args.constraints[0]];
    return !(value === null && otherFieldValue === null);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} & ${args.constraints[0]} must not be null together`;
  }
}

export class CreateTransactionDto {
  @Min(9)
  @Max(99999)
  @IsNumber()
  @ApiProperty({ type: Number })
  totalPrice: number;

  @Min(30)
  @Max(365)
  @IsNumber()
  @Validate(NotNullTogather, ['amountOfMembers'])
  @ApiProperty({ nullable: true, type: Number })
  amountOfDays: null | number;

  @Min(1)
  @Max(1000)
  @IsNumber()
  @Validate(NotNullTogather, ['amountOfDays'])
  @ApiProperty({ nullable: true, type: Number })
  amountOfMembers: null | number;
}
