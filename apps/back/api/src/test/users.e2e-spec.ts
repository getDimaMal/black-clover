import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { AppModule } from '../app.module';

import {
  getSelfUserPros,
  getSignErrorCases,
  getUpdateSelfErrorCases,
  getUpdateSelfResultCases,
} from './test-data/users.test-data';
import { useGetAuthHeader, useGetSelf, usePutSelf, useSignIn, useSignUp } from './test-utils/users.test-utils';

describe('UserController (e2e)', () => {
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

  describe('/users/signup (POST)', () => {
    it('should create a new user', async () => {
      const [{ id, accessToken, ...other }, status] = await useSignUp({ app });

      expect(status).toEqual(201);
      expect(id).toBeDefined();
      expect(accessToken).toBeDefined();
      expect(other).toEqual(getSelfUserPros());
    });

    it.each<(typeof getSignErrorCases)[0]>(getSignErrorCases)(
      'should return a validation error when: $case',
      async ({ props: user, error }) => {
        const [{ message }, status] = await useSignUp({ app, user });

        expect(status).toEqual(400);
        expect(message).toContain(error);
      }
    );

    it('should return a conflict error when user with email exists', async () => {
      await useSignUp({ app });
      const [{ message }, status] = await useSignUp({ app });

      expect(status).toEqual(409);
      expect(message).toEqual('user already exists');
    });
  });

  describe('/users/signin (POST)', () => {
    it('should sign in a user and return an accessToken', async () => {
      await useSignUp({ app });
      const [{ id, accessToken, ...other }, status] = await useSignIn({ app });

      expect(status).toEqual(200);
      expect(id).toBeDefined();
      expect(accessToken).toBeDefined();
      expect(other).toEqual(getSelfUserPros());
    });

    it.each<(typeof getSignErrorCases)[0]>(getSignErrorCases)(
      'should return a validation error when: $case',
      async ({ props: user, error }) => {
        const [{ message }, status] = await useSignIn({ app, user });

        expect(status).toEqual(400);
        expect(message).toContain(error);
      }
    );

    it('should return an unauthorized error when credentials are incorrect', async () => {
      const [{ message }, status] = await useSignIn({ app });

      expect(status).toEqual(401);
      expect(message).toEqual('please check your credentials');
    });
  });

  describe('/users/self (GET)', () => {
    it('should return the current user', async () => {
      const header = await useGetAuthHeader({ app });
      const [{ id, ...other }, status] = await useGetSelf({ app, header });

      expect(status).toEqual(200);
      expect(id).toBeDefined();
      expect(other).toEqual(getSelfUserPros());
    });

    it('should return an unauthorized error when auth header not provided', async () => {
      const [{ message }, status] = await useGetSelf({ app });

      expect(status).toEqual(401);
      expect(message).toEqual('Unauthorized');
    });
  });

  describe('/users/self (PUT)', () => {
    it.each<(typeof getUpdateSelfResultCases)[0]>(getUpdateSelfResultCases)(
      'should return an updated user when $case',
      async ({ props, result }) => {
        const header = await useGetAuthHeader({ app });
        const [{ id, ...other }, status] = await usePutSelf({ app, header, props });

        expect(status).toEqual(200);
        expect(id).toBeDefined();
        expect(other).toEqual(result);
      }
    );

    it.each<(typeof getUpdateSelfErrorCases)[0]>(getUpdateSelfErrorCases)(
      'should return an error when: $case',
      async ({ props, error }) => {
        const header = await useGetAuthHeader({ app });
        const [{ message }, status] = await usePutSelf({ app, header, props });

        expect(status).toEqual(400);
        expect(message).toContain(error);
      }
    );

    it('should return an unauthorized error when no auth is provided', async () => {
      const [{ message }, status] = await usePutSelf({ app });

      expect(status).toEqual(401);
      expect(message).toEqual('Unauthorized');
    });
  });
});
