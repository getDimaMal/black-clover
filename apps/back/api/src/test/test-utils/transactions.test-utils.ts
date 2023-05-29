import { CreateTransactionDto } from '@black-clover/back/transactions/dto/create-transaction.dto';
import { TransactionDto } from '@black-clover/back/transactions/dto/transaction.dto';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { getCreateTransactionProps } from '../test-data/transactions.test-data';

import { ErrorType } from './types';

type UseProps = {
  app: INestApplication;
  header?: [string, string];
};

type UsePostProps = UseProps & {
  props?: CreateTransactionDto;
};

type GetListProps = UseProps & {
  workspaceId: string;
};

type UsePostReturnProps = [TransactionDto & ErrorType, number];

type UseGetListReturnProps = [TransactionDto[] & ErrorType, number];

export const usePostTransaction = async ({
  app,
  header = ['header', ''],
  props = getCreateTransactionProps(),
}: UsePostProps): Promise<UsePostReturnProps> => {
  const { body, status } = await request(app.getHttpServer())
    .post('/transactions')
    .set(...header)
    .send(props);

  return [body as UsePostReturnProps[0], status];
};

export const useGetListTransactions = async ({
  app,
  workspaceId,
  header = ['header', ''],
}: GetListProps): Promise<UseGetListReturnProps> => {
  const { body, status } = await request(app.getHttpServer())
    .get(`/transactions/workspace/${workspaceId}`)
    .set(...header);

  return [body as UseGetListReturnProps[0], status];
};
