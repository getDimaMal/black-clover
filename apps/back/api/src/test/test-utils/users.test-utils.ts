import { CreateUserDto } from '@black-clover/back/users/dto/create-user.dto';
import { SelfUserDto } from '@black-clover/back/users/dto/self-user.dto';
import { TokenUserDto } from '@black-clover/back/users/dto/token-user.dto';
import { UpdateUserDto } from '@black-clover/back/users/dto/update-user.dto';
import { INestApplication } from '@nestjs/common';

import { getCreateUserProps, getUpdateUserProps } from '../test-data/users.test-data';

import { getServer } from './test-utils';
import { ErrorType, UseProps } from './types';

type UseSignProps = {
  app: INestApplication;
  user?: CreateUserDto;
};

type UsePutSelfProps = UseProps & {
  props?: UpdateUserDto;
};

type SignReturnProps = [TokenUserDto & ErrorType, number];

type SelfReturnProps = [SelfUserDto & ErrorType, number];

export const useSignUp = async ({ app, user = getCreateUserProps() }: UseSignProps): Promise<SignReturnProps> => {
  const { body, status } = await getServer(app).post('/users/signup').send(user);

  return [body as SignReturnProps[0], status];
};

export const useSignIn = async ({ app, user = getCreateUserProps() }: UseSignProps): Promise<SignReturnProps> => {
  const { body, status } = await getServer(app).post('/users/signIn').send(user);

  return [body as SignReturnProps[0], status];
};

export const useGetSelf = async ({ app, header = ['header', ''] }: UseProps): Promise<SelfReturnProps> => {
  const { body, status } = await getServer(app)
    .get('/users/self')
    .set(...header);

  return [body as SelfReturnProps[0], status];
};

export const usePutSelf = async ({
  app,
  header = ['header', ''],
  props = getUpdateUserProps(),
}: UsePutSelfProps): Promise<SelfReturnProps> => {
  const { body, status } = await getServer(app)
    .put('/users/self')
    .set(...header)
    .send(props);

  return [body as SelfReturnProps[0], status];
};

export const useGetAuthHeader = async ({ app, user }: UseSignProps): Promise<[string, string]> => {
  const [{ accessToken }] = await useSignUp({ app, user });

  return ['Authorization', `Bearer ${accessToken}`];
};
