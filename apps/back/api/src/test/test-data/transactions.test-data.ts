import { CreateTransactionDto } from '@black-clover/back/transactions/dto/create-transaction.dto';
import { TransactionDto } from '@black-clover/back/transactions/dto/transaction.dto';

export const getCreateTransactionProps = (props: Partial<CreateTransactionDto> = {}): CreateTransactionDto => ({
  totalPrice: 90,
  amountOfDays: 30,
  amountOfMembers: 9,
  ...props,
});

export const getTransactionProps = (props: Partial<Omit<TransactionDto, 'id'>> = {}): Omit<TransactionDto, 'id'> => ({
  totalPrice: 90,
  amountOfDays: 30,
  amountOfMembers: 9,
  ...props,
});

export const getCreateTransactionErrorCases: { case: string; props: CreateTransactionDto; error: string }[] = [
  {
    case: 'a totalPrice is null',
    props: getCreateTransactionProps({ totalPrice: null }),
    error: 'totalPrice must be a number conforming to the specified constraints',
  },
  {
    case: 'a totalPrice is 1',
    props: getCreateTransactionProps({ totalPrice: 1 }),
    error: 'totalPrice must not be less than 9',
  },
  {
    case: 'a totalPrice is 1000000',
    props: getCreateTransactionProps({ totalPrice: 1000000 }),
    error: 'totalPrice must not be greater than 999999',
  },
  {
    case: 'a amountOfDays is null',
    props: getCreateTransactionProps({ amountOfDays: null }),
    error: 'amountOfDays must be a number conforming to the specified constraints',
  },
  {
    case: 'a amountOfDays is 1',
    props: getCreateTransactionProps({ amountOfDays: 1 }),
    error: 'amountOfDays must not be less than 30',
  },
  {
    case: 'a amountOfDays is 1000',
    props: getCreateTransactionProps({ amountOfDays: 1000 }),
    error: 'amountOfDays must not be greater than 365',
  },
  {
    case: 'a amountOfMembers is null',
    props: getCreateTransactionProps({ amountOfMembers: null }),
    error: 'amountOfMembers must be a number conforming to the specified constraints',
  },
  {
    case: 'a amountOfMembers is 0',
    props: getCreateTransactionProps({ amountOfMembers: 0 }),
    error: 'amountOfMembers must not be less than 1',
  },
  {
    case: 'a amountOfMembers is 10000',
    props: getCreateTransactionProps({ amountOfMembers: 10000 }),
    error: 'amountOfMembers must not be greater than 1000',
  },
];
