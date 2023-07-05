import React, { FC } from 'react';
import { LoginFormUIType } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Button/Button';
import Loader from '../../../atoms/Loader/Loader';
import TextField from '../../../atoms/TextField/TextField';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './LoginFormUI.styles';

export type LoginFormUITestIdTypes = keyof CreateUserDto | 'loginForm' | 'loginLoader' | 'signIn' | 'signUp';

export const LoginFormUITestId: Record<LoginFormUITestIdTypes, LoginFormUITestIdTypes> = {
  email: 'email',
  password: 'password',
  loginForm: 'loginForm',
  loginLoader: 'loginLoader',
  signUp: 'signUp',
  signIn: 'signIn',
};

const LoginFormUI: FC<LoginFormUIType> = ({ isLoading, error, onSignUp, onSignIn }) => {
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
      data-testid={LoginFormUITestId['loginForm']}
    >
      <Loader testId={LoginFormUITestId['loginLoader']} isLoading={isLoading} />

      <TextField {...getInputProps('email')} autoFocus type="email" label="Email" testId={LoginFormUITestId['email']} />

      <TextField
        {...getInputProps('password')}
        type="password"
        label="Password"
        testId={LoginFormUITestId['password']}
      />

      <Typography variant="bodyS" className={classes.error}>
        {error}
      </Typography>

      <Button label="Sign Up" testId={LoginFormUITestId['signUp']} color="secondary" onClick={handleSubmit(onSignUp)} />
      <Button label="Sign In" testId={LoginFormUITestId['signIn']} type="submit" />
    </form>
  );
};

export default LoginFormUI;
