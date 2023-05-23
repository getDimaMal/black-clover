import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../app.module';

import { createUserDto } from './__test-data__/users.test-data';

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
    it('should create new user', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signup').send(createUserDto);

      expect(status).toEqual(201);
      expect(body.id).toBeDefined();
      expect(body.accessToken).toBeDefined();
      expect(body.email).toEqual(createUserDto.email);
    });

    it('should return validation error if fields are empty', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signup').send({});

      expect(status).toEqual(400);
      expect(body.error).toEqual('Bad Request');
      expect(body.message[0]).toEqual('email must be an email');
      expect(body.message[1]).toEqual('password should be min 8 chars with letters & numbers');
    });
  });

  describe('/users/signin (POST)', () => {
    it('should sign in user and return accessToken', async () => {
      await request(app.getHttpServer()).post('/users/signup').send(createUserDto);
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send(createUserDto);

      expect(status).toEqual(200);
      expect(body.id).toBeDefined();
      expect(body.accessToken).toBeDefined();
      expect(body.email).toEqual(createUserDto.email);
    });

    it('should return validation error if fields are empty', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send({});

      expect(status).toEqual(400);
      expect(body.error).toEqual('Bad Request');
      expect(body.message[0]).toEqual('email must be an email');
      expect(body.message[1]).toEqual('password should be min 8 chars with letters & numbers');
    });

    it('should return an unauthorized error if the credentials are incorrect', async () => {
      const { status, body } = await request(app.getHttpServer()).post('/users/signin').send(createUserDto);

      expect(status).toEqual(401);
      expect(body.error).toEqual('Unauthorized');
    });
  });
});
