import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { AppModule } from '../app.module';

import {
  getCreateTransactionErrorCases,
  getCreateTransactionProps,
  getTransactionProps,
} from './test-data/transactions.test-data';
import { useGetListTransactions, usePostTransaction } from './test-utils/transactions.test-utils';
import { useGetAuthHeader } from './test-utils/users.test-utils';

describe('TransactionsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/transactions (POST)', () => {
    it('should return a new transaction', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ id, ...other }, status] = await usePostTransaction({ app, header });

      expect(status).toBe(201);
      expect(id).toBeDefined();
      expect(other).toEqual(getTransactionProps());
    });

    it('should return an error when the auth header was not provided', async () => {
      const [{ message }, status] = await usePostTransaction({ app });

      expect(status).toBe(401);
      expect(message).toBe('Unauthorized');
    });

    it.each<(typeof getCreateTransactionErrorCases)[0]>(getCreateTransactionErrorCases)(
      'should return an error when: $case',
      async ({ props, error }) => {
        const header = await useGetAuthHeader({ app });
        const [{ message }, status] = await usePostTransaction({ app, header, props });

        expect(status).toBe(400);
        expect(message).toContain(error);
      }
    );
  });

  describe('/transactions (GET)', () => {
    it('should return an empty list', async () => {
      const header = await useGetAuthHeader({ app });
      const [body, status] = await useGetListTransactions({ app, header });

      expect(status).toBe(200);
      expect(body).toEqual([]);
    });

    it('should return a list of transactions', async () => {
      const header = await useGetAuthHeader({ app });

      const result = [
        (await usePostTransaction({ app, header, props: getCreateTransactionProps({ totalPrice: 100 }) }))[0],
        (await usePostTransaction({ app, header, props: getCreateTransactionProps({ totalPrice: 1000 }) }))[0],
      ];

      const [body, status] = await useGetListTransactions({ app, header });

      expect(status).toBe(200);
      expect(body).toEqual([...result]);
    });

    it('should return an error when the auth header was not provided', async () => {
      const [{ message }, status] = await useGetListTransactions({ app });

      expect(status).toBe(401);
      expect(message).toBe('Unauthorized');
    });
  });
});
