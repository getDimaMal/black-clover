import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import useFormError from '../../../hooks/useFormError';
import Button from '../../atoms/Button/Button';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import TextField from '../../atoms/TextField/TextField';

import useStyles from './LoginForm.styles';

export type LoginFormProps = {
  defaultValues: CreateUserDto;
  onSignUp: (args: CreateUserDto) => void;
  onSignIn: (args: CreateUserDto) => void;
  isLoading?: boolean;
};

const LoginForm: FC<LoginFormProps> = ({ onSignUp, onSignIn, defaultValues, isLoading }) => {
  const { control, handleSubmit, formState } = useForm<CreateUserDto>({
    defaultValues,
    resolver: classValidatorResolver(CreateUserDto),
  });
  const { getError } = useFormError<CreateUserDto>({ errors: formState.errors, dirtyFields: formState.dirtyFields });

  const { classes } = useStyles();

  return (
    <form onSubmit={handleSubmit(onSignIn)} className={classes.root}>
      <ProgressBar isLoading={isLoading} />

      <Controller
        name="email"
        control={control}
        render={({ field: { ref, ...other } }) => (
          <TextField {...other} inputRef={ref} label="Email" error={getError('email')} />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { ref, ...other } }) => (
          <TextField {...other} inputRef={ref} label="Password" type="password" error={getError('password')} />
        )}
      />

      <Button label="Sign Up" type="button" color="secondary" onClick={handleSubmit(onSignUp)} />
      <Button label="Sign In" type="submit" />
    </form>
  );
};

export default LoginForm;
