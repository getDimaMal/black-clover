import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LoginFormUIType } from '@black-clover/front/shared/types/auth';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import useFormError from '../../../../hooks/useFormError';
import Button from '../../../atoms/Button/Button';
import Loader from '../../../atoms/Loader/Loader';
import TextField from '../../../atoms/TextField/TextField';

import useStyles from './LoginFormUI.styles';

export type LoginFormUITestIdTypes = keyof CreateUserDto | 'loginForm' | 'signIn' | 'signUp' | 'loginLoader';

export const LoginFormUITestId: Record<LoginFormUITestIdTypes, LoginFormUITestIdTypes> = {
  email: 'email',
  password: 'password',
  signUp: 'signUp',
  signIn: 'signIn',
  loginForm: 'loginForm',
  loginLoader: 'loginLoader',
};

const LoginFormUI: FC<LoginFormUIType> = ({ onSignUp, onSignIn, isLoading }) => {
  // TODO Create custom useForm hook
  const { control, handleSubmit, formState } = useForm<CreateUserDto>({
    defaultValues: { email: '', password: '' },
    // TODO create custom classValidatorResolver
    resolver: classValidatorResolver(CreateUserDto),
  });
  const { getError } = useFormError<CreateUserDto>({ errors: formState.errors, dirtyFields: formState.dirtyFields });
  const { classes } = useStyles();

  return (
    <form onSubmit={handleSubmit(onSignIn)} className={classes.root} data-testid={LoginFormUITestId['loginForm']}>
      <Loader testId={LoginFormUITestId['loginLoader']} isLoading={isLoading} />

      <Controller
        name="email"
        control={control}
        render={({ field: { ref, ...other } }) => (
          <TextField
            {...other}
            inputRef={ref}
            label="Email"
            error={getError('email')}
            testId={LoginFormUITestId['email']}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { ref, ...other } }) => (
          <TextField
            {...other}
            inputRef={ref}
            type="password"
            label="Password"
            error={getError('password')}
            testId={LoginFormUITestId['password']}
          />
        )}
      />

      <Button label="Sign Up" testId={LoginFormUITestId['signUp']} color="secondary" onClick={handleSubmit(onSignUp)} />
      <Button label="Sign In" testId={LoginFormUITestId['signIn']} type="submit" />
    </form>
  );
};

export default LoginFormUI;
