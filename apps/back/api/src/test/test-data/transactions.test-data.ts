import { CreateTransactionDto } from '@black-clover/back/transactions/dto/create-transaction.dto';
import { TransactionDto } from '@black-clover/back/transactions/dto/transaction.dto';

export const getCreateTransactionProps = (props: Partial<CreateTransactionDto> = {}): CreateTransactionDto => ({
  totalPrice: 90,
  amountOfDays: 30,
  amountOfMembers: 9,
  ...props,
});

export const getTransactionProps = (
  props: Partial<Omit<TransactionDto, 'id'>> = {}
): Omit<TransactionDto, 'id' | 'createdAt'> => ({
  totalPrice: 90,
  amountOfDays: 30,
  amountOfMembers: 9,
  ...props,
});

export const getCreateTransactionResultCases: {
  case: string;
  props: CreateTransactionDto;
  result: Omit<TransactionDto, 'id' | 'createdAt'>;
}[] = [
  {
    case: 'default body provided',
    props: getCreateTransactionProps(),
    result: getTransactionProps(),
  },
  {
    case: 'amountOfDays is null',
    props: getCreateTransactionProps({ amountOfDays: null }),
    result: getTransactionProps({ amountOfDays: null }),
  },
  {
    case: 'amountOfMembers is null',
    props: getCreateTransactionProps({ amountOfMembers: null }),
    result: getTransactionProps({ amountOfMembers: null }),
  },
];

export const getCreateTransactionErrorCases: { case: string; props: CreateTransactionDto; error: string }[] = [
  {
    case: 'totalPrice is null',
    props: getCreateTransactionProps({ totalPrice: null }),
    error: 'totalPrice must be a number conforming to the specified constraints',
  },
  {
    case: 'totalPrice is 1',
    props: getCreateTransactionProps({ totalPrice: 1 }),
    error: 'totalPrice must not be less than 9',
  },
  {
    case: 'totalPrice is 100000',
    props: getCreateTransactionProps({ totalPrice: 100000 }),
    error: 'totalPrice must not be greater than 99999',
  },
  {
    case: 'amountOfDays is 1',
    props: getCreateTransactionProps({ amountOfDays: 1 }),
    error: 'amountOfDays must not be less than 30',
  },
  {
    case: 'amountOfDays is 1000',
    props: getCreateTransactionProps({ amountOfDays: 1000 }),
    error: 'amountOfDays must not be greater than 365',
  },
  {
    case: 'amountOfMembers is 0',
    props: getCreateTransactionProps({ amountOfMembers: 0 }),
    error: 'amountOfMembers must not be less than 1',
  },
  {
    case: 'amountOfMembers is 10000',
    props: getCreateTransactionProps({ amountOfMembers: 10000 }),
    error: 'amountOfMembers must not be greater than 1000',
  },
  {
    case: 'amountOfDays is null & amountOfMembers is null',
    props: getCreateTransactionProps({ amountOfDays: null, amountOfMembers: null }),
    error: 'amountOfMembers & amountOfDays must not be null together',
  },
];
