import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../app.module';

import { getUserUpdate, userCreate } from './__test-data__/users.test-data';
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
      const { status, body } = await request(app.getHttpServer()).post('/users/signup').send(userCreate);

      expect(status).toEqual(201);
      expect(body.id).toBeDefined();
      expect(body.accessToken).toBeDefined();
      expect(body.email).toEqual(userCreate.email);
    });

    it('should return a validation error when fields are empty', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signup').send({});

      expect(status).toEqual(400);
      expect(body.error).toEqual('Bad Request');
      expect(body.message[0]).toEqual('email must be an email');
      expect(body.message[1]).toEqual('password should be min 8 chars with letters & numbers');
    });

    it('should return a conflict error when user with email exists', async () => {
      await request(app.getHttpServer()).post('/users/signup').send(userCreate);

      const { status, body } = await request(app.getHttpServer()).post('/users/signup').send(userCreate);

      expect(status).toEqual(409);
      expect(body.error).toEqual('Conflict');
      expect(body.message).toEqual('user already exists');
    });
  });

  describe('/users/signin (POST)', () => {
    it('should sign in user and return an accessToken', async () => {
      await request(app.getHttpServer()).post('/users/signup').send(userCreate);
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send(userCreate);

      expect(status).toEqual(200);
      expect(body.id).toBeDefined();
      expect(body.accessToken).toBeDefined();
      expect(body.email).toEqual(userCreate.email);
    });

    it('should return a validation error when fields are empty', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send({});

      expect(status).toEqual(400);
      expect(body.error).toEqual('Bad Request');
      expect(body.message[0]).toEqual('email must be an email');
      expect(body.message[1]).toEqual('password should be min 8 chars with letters & numbers');
    });

    it('should return an unauthorized error when credentials are incorrect', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send(userCreate);

      expect(status).toEqual(401);
      expect(body.error).toEqual('Unauthorized');
    });
  });

  describe('/users/self (GET', () => {
    it('should return current user', async () => {
      const auth = await getAuthHeader(app);

      const { status, body } = await request(app.getHttpServer())
        .get('/users/self')
        .set(...auth);

      expect(status).toEqual(200);
      expect(body.email).toBeDefined();
      expect(body.accessToken).not.toBeDefined();
    });

    it('should return an unauthorized error when auth header not provided', async () => {
      const { status, body } = await request(app.getHttpServer()).get('/users/self');

      expect(status).toEqual(401);
      expect(body.message).toEqual('Unauthorized');
    });
  });

  describe('/users/self (PUT)', () => {
    it('should return an updated user', async () => {
      const auth = await getAuthHeader(app);
      const props = getUserUpdate();

      const { status, body } = await request(app.getHttpServer())
        .put('/users/self')
        .set(...auth)
        .send(props);

      expect(status).toEqual(200);
      expect(body.id).toBeDefined();
      expect(body.email).toBeDefined();
      expect(body.firstName).toEqual(props.firstName);
      expect(body.lastName).toEqual(props.lastName);
    });

    it('should return an unauthorized error when no auth is provided', async () => {
      const props = getUserUpdate();

      const { status, body } = await request(app.getHttpServer()).put('/users/self').send(props);

      expect(status).toEqual(401);
      expect(body.message).toEqual('Unauthorized');
    });

    describe('fields validation', () => {
      it('should return user with updated firstName', async () => {
        const auth = await getAuthHeader(app);
        const props = getUserUpdate({ lastName: undefined });

        const { status, body } = await request(app.getHttpServer())
          .put('/users/self')
          .set(...auth)
          .send(props);

        expect(status).toEqual(200);
        expect(body.firstName).toEqual(props.firstName);
        expect(body.lastName).toEqual(null);
      });

      it('should return user with updated lastName', async () => {
        const auth = await getAuthHeader(app);
        const props = getUserUpdate({ firstName: undefined });

        const { status, body } = await request(app.getHttpServer())
          .put('/users/self')
          .set(...auth)
          .send(props);

        expect(status).toEqual(200);
        expect(body.firstName).toEqual(null);
        expect(body.lastName).toEqual(props.lastName);
      });

      it('should return a validation error when firstName length less than 3 chars', async () => {
        const auth = await getAuthHeader(app);
        const props = getUserUpdate({ firstName: '' });

        const { status, body } = await request(app.getHttpServer())
          .put('/users/self')
          .set(...auth)
          .send(props);

        expect(status).toEqual(400);
        expect(body.message[0]).toEqual('firstName must be longer than or equal to 3 characters');
      });

      it('should return a validation error when firstName length longer than 24 chars', async () => {
        const auth = await getAuthHeader(app);
        const props = getUserUpdate({ firstName: 'too long name to test validation' });

        const { status, body } = await request(app.getHttpServer())
          .put('/users/self')
          .set(...auth)
          .send(props);

        expect(status).toEqual(400);
        expect(body.message[0]).toEqual('firstName must be shorter than or equal to 24 characters');
      });

      it('should return a validation error when lastName length less than 3 chars', async () => {
        const auth = await getAuthHeader(app);
        const props = getUserUpdate({ lastName: '' });

        const { status, body } = await request(app.getHttpServer())
          .put('/users/self')
          .set(...auth)
          .send(props);

        expect(status).toEqual(400);
        expect(body.message[0]).toEqual('lastName must be longer than or equal to 3 characters');
      });

      it('should return a validation error when lastName length longer than 24 chars', async () => {
        const auth = await getAuthHeader(app);
        const props = getUserUpdate({ lastName: 'too long name to test validation' });

        const { status, body } = await request(app.getHttpServer())
          .put('/users/self')
          .set(...auth)
          .send(props);

        expect(status).toEqual(400);
        expect(body.message[0]).toEqual('lastName must be shorter than or equal to 24 characters');
      });
    });
  });
});
