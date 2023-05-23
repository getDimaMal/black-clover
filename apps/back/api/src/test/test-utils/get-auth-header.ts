import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { userCreate } from '../__test-data__/users.test-data';

export const getAuthHeader = async (app: INestApplication) => {
  const { body } = await request(app.getHttpServer()).post('/users/signup').send(userCreate);

  return ['Authorization', `Bearer ${body.accessToken}`];
};
