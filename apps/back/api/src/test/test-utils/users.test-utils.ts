import { CreateUserDto, SelfUserDto, TokenUserDto, UpdateUserDto } from '@black-clover/back/users/dto';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { getCreateUserProps, getUpdateUserProps } from '../test-data/users.test-data';

import { ErrorType } from './types';

type UseSignProps = {
  app: INestApplication;
  user?: CreateUserDto;
};

type UseGetSelfProps = {
  app: INestApplication;
  header?: [string, string];
};

type UsePutSelfProps = UseGetSelfProps & {
  props?: UpdateUserDto;
};

type SignReturnProps = [TokenUserDto & ErrorType, number];

type SelfReturnProps = [SelfUserDto & ErrorType, number];

export const useSignUp = async ({ app, user = getCreateUserProps() }: UseSignProps): Promise<SignReturnProps> => {
  const { body, status } = await request(app.getHttpServer()).post('/users/signup').send(user);

  return [body as SignReturnProps[0], status];
};

export const useSignIn = async ({ app, user = getCreateUserProps() }: UseSignProps): Promise<SignReturnProps> => {
  const { body, status } = await request(app.getHttpServer()).post('/users/signIn').send(user);

  return [body as SignReturnProps[0], status];
};

export const useGetSelf = async ({ app, header = ['header', ''] }: UseGetSelfProps): Promise<SelfReturnProps> => {
  const { body, status } = await request(app.getHttpServer())
    .get('/users/self')
    .set(...header);

  return [body as SelfReturnProps[0], status];
};

export const usePutSelf = async ({
  app,
  header = ['header', ''],
  props = getUpdateUserProps(),
}: UsePutSelfProps): Promise<SelfReturnProps> => {
  const { body, status } = await request(app.getHttpServer())
    .put('/users/self')
    .set(...header)
    .send(props);

  return [body as SelfReturnProps[0], status];
};

export const useGetAuthHeader = async ({ app, user }: UseSignProps): Promise<[string, string]> => {
  const [{ accessToken }] = await useSignUp({ app, user });

  return ['Authorization', `Bearer ${accessToken}`];
};
