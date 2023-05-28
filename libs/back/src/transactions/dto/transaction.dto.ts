import { Expose } from 'class-transformer';

export class TransactionDto {
  @Expose()
  id: string;

  @Expose()
  totalPrice: number;

  @Expose()
  amountOfDays: null | number;

  @Expose()
  amountOfMembers: number;

  @Expose()
  createdAt: Date;
}
