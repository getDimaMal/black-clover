import React, { FC } from 'react';
import { LoginFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import useForm from '../../../../hooks/useForm';
import Alert from '../../../atoms/Alert/Alert';
import Button from '../../../atoms/Button/Button';
import Loader from '../../../atoms/Loader/Loader';
import TextField from '../../../atoms/TextField/TextField';

import useStyles from './LoginForm.styles';

export type TLoginFormTestID = keyof CreateUserDto | 'loginForm' | 'loginLoader' | 'signIn' | 'signUp';

export const LoginFormTestID: Record<TLoginFormTestID, TLoginFormTestID> = {
  email: 'email',
  password: 'password',
  loginForm: 'loginForm',
  loginLoader: 'loginLoader',
  signUp: 'signUp',
  signIn: 'signIn',
};

const LoginForm: FC<LoginFormProps> = ({ isLoading, error, onSignUp, onSignIn }) => {
  const { classes } = useStyles();
  const { getInputProps, handleSubmit } = useForm<CreateUserDto>({
    initForm: { email: '', password: '' },
    Resolver: CreateUserDto,
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSignIn)}
      className={classes.root}
      data-testid={LoginFormTestID['loginForm']}
    >
      <Loader testId={LoginFormTestID['loginLoader']} isLoading={isLoading} />

      <TextField {...getInputProps('email')} autoFocus type="email" label="Email" testId={LoginFormTestID['email']} />

      <TextField {...getInputProps('password')} type="password" label="Password" testId={LoginFormTestID['password']} />

      <Alert color="error" message={error || ''} />

      <Button label="Sign Up" testId={LoginFormTestID['signUp']} color="secondary" onClick={handleSubmit(onSignUp)} />
      <Button label="Sign In" testId={LoginFormTestID['signIn']} type="submit" />
    </form>
  );
};

export default LoginForm;
