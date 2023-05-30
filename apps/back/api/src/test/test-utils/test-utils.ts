import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { v4 as uuidV4 } from 'uuid';

export const getServer = (app: INestApplication) => {
  return request(app.getHttpServer());
};

export const getUUID = (): string => {
  return uuidV4();
};

export const getLorem = (repeatTimes = 1): string => {
  return `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Accusamus accusantium aut deserunt expedita impedit magnam minima modi praesentium similique!
  Accusantium aliquam, atque culpa doloribus iure modi nesciunt quae sint ut.
  `.repeat(repeatTimes);
};
