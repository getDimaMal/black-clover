import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../app.module';

import { createUser, selfUser, updateUser } from './__test-data__/users.test-data';
import { getAuthHeader } from './test-utils/get-auth-header';

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
      const {
        status,
        body: { id, accessToken, ...other },
      } = await request(app.getHttpServer()).post('/users/signup').send(createUser);

      expect(status).toEqual(201);
      expect(id).toBeDefined();
      expect(accessToken).toBeDefined();
      expect(other).toEqual(selfUser);
    });

    it('should return a validation error when fields are empty', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signup').send({});

      expect(status).toEqual(400);
      expect(body.error).toEqual('Bad Request');
      expect(body.message[0]).toEqual('email must be an email');
      expect(body.message[1]).toEqual('password should be min 8 chars with letters & numbers');
    });

    it('should return a conflict error when user with email exists', async () => {
      await request(app.getHttpServer()).post('/users/signup').send(createUser);

      const { status, body } = await request(app.getHttpServer()).post('/users/signup').send(createUser);

      expect(status).toEqual(409);
      expect(body.error).toEqual('Conflict');
      expect(body.message).toEqual('user already exists');
    });
  });

  describe('/users/signin (POST)', () => {
    it('should sign in user and return an accessToken', async () => {
      await request(app.getHttpServer()).post('/users/signup').send(createUser);
      const {
        status,
        body: { id, accessToken, ...other },
      } = await request(app.getHttpServer()).post('/users/signin').send(createUser);

      expect(status).toEqual(200);
      expect(id).toBeDefined();
      expect(accessToken).toBeDefined();
      expect(other).toEqual(selfUser);
    });

    it('should return a validation error when fields are empty', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send({});

      expect(status).toEqual(400);
      expect(body.error).toEqual('Bad Request');
      expect(body.message[0]).toEqual('email must be an email');
      expect(body.message[1]).toEqual('password should be min 8 chars with letters & numbers');
    });

    it('should return an unauthorized error when credentials are incorrect', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send(createUser);

      expect(status).toEqual(401);
      expect(body.error).toEqual('Unauthorized');
    });
  });

  describe('/users/self (GET)', () => {
    it('should return current user', async () => {
      const auth = await getAuthHeader(app, createUser);

      const {
        status,
        body: { id, ...other },
      } = await request(app.getHttpServer())
        .get('/users/self')
        .set(...auth);

      expect(status).toEqual(200);
      expect(id).toBeDefined();
      expect(other).toEqual(selfUser);
    });

    it('should return an unauthorized error when auth header not provided', async () => {
      const { status, body } = await request(app.getHttpServer()).get('/users/self');

      expect(status).toEqual(401);
      expect(body.message).toEqual('Unauthorized');
    });
  });

  describe('/users/self (PUT)', () => {
    it('should return an updated user', async () => {
      const auth = await getAuthHeader(app, createUser);

      const {
        status,
        body: { id, ...other },
      } = await request(app.getHttpServer())
        .put('/users/self')
        .set(...auth)
        .send(updateUser);

      expect(status).toEqual(200);
      expect(id).toBeDefined();
      expect(other).toEqual({ ...selfUser, ...updateUser });
    });

    it('should return an unauthorized error when no auth is provided', async () => {
      const { status, body } = await request(app.getHttpServer()).put('/users/self').send(updateUser);

      expect(status).toEqual(401);
      expect(body.message).toEqual('Unauthorized');
    });
  });
});
