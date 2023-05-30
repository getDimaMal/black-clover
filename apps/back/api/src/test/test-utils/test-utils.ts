import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { v4 as uuidV4 } from 'uuid';

export const getServer = (app: INestApplication) => {
  return request(app.getHttpServer());
};

export const getUUID = (): string => {
  return uuidV4();
};
