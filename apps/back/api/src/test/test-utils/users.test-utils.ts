import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { ResetPasswordDto } from '@black-clover/shared/dto/users/reset-password.dto';
import { SelfUserDto } from '@black-clover/shared/dto/users/self-user.dto';
import { TokenUserDto } from '@black-clover/shared/dto/users/token-user.dto';
import { UpdateUserDto } from '@black-clover/shared/dto/users/update-user.dto';
import { INestApplication } from '@nestjs/common';

import { getCreateUserProps, getResetPasswordProps, getUpdateUserProps } from '../test-data/users.test-data';

import { getServer } from './test-utils';
import { ErrorType, UseProps } from './types';

type UseSignProps = {
  app: INestApplication;
  user?: CreateUserDto;
};

type UseCheckEmailProps = {
  app: INestApplication;
  data: CheckEmailDto;
};

type UseResetPasswordProps = {
  app: INestApplication;
  data?: ResetPasswordDto;
};

type UsePutSelfProps = UseProps & {
  props?: UpdateUserDto;
};

type SignReturnProps = [TokenUserDto & ErrorType, number];

type CheckEmailReturnProps = [{ token: string } & ErrorType, number];

type SelfReturnProps = [SelfUserDto & ErrorType, number];

export const useSignUp = async ({ app, user = getCreateUserProps() }: UseSignProps): Promise<SignReturnProps> => {
  const { body, status } = await getServer(app).post('/users/signup').send(user);

  return [body as SignReturnProps[0], status];
};

export const useSignIn = async ({ app, user = getCreateUserProps() }: UseSignProps): Promise<SignReturnProps> => {
  const { body, status } = await getServer(app).post('/users/signIn').send(user);

  return [body as SignReturnProps[0], status];
};

export const useCheckEmail = async ({ app, data }: UseCheckEmailProps): Promise<CheckEmailReturnProps> => {
  const { body, status } = await getServer(app).post('/users/checkEmail').send(data);

  return [body as CheckEmailReturnProps[0], status];
};

export const useResetPassword = async ({
  app,
  data = getResetPasswordProps(),
}: UseResetPasswordProps): Promise<SignReturnProps> => {
  const { body, status } = await getServer(app).post('/users/resetPassword').send(data);

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
