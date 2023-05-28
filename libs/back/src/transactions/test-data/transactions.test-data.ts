import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../entities/transaction.entity';

export const transaction: Transaction = {
  id: 'transaction-id-123',
  totalPrice: 180,
  amountOfDays: 60,
  amountOfMembers: 9,
};

export const transactionsList: Transaction[] = [
  {
    id: 'transaction-id-123',
    totalPrice: 90,
    amountOfDays: 30,
    amountOfMembers: 9,
  },
  {
    id: 'transaction-id-456',
    totalPrice: 180,
    amountOfDays: 60,
    amountOfMembers: 9,
  },
];

export const createTransaction: CreateTransactionDto = {
  totalPrice: 180,
  amountOfDays: 60,
  amountOfMembers: 9,
};
