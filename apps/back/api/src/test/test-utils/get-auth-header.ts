import { CreateUserDto } from '@black-clover/back/users/dtos';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

export const getAuthHeader = async (app: INestApplication, user: CreateUserDto) => {
  const { body } = await request(app.getHttpServer()).post('/users/signup').send(user);

  return ['Authorization', `Bearer ${body.accessToken}`];
};
