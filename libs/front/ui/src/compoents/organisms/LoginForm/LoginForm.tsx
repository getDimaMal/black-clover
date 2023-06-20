import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import Button from '../../atoms/Button/Button';
import TextField from '../../atoms/TextField/TextField';

export type LoginFormProps = {
  onSignIn: (args: CreateUserDto) => void;
  onSignUp: (args: CreateUserDto) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onSignIn, onSignUp }) => {
  const { control, handleSubmit } = useForm<CreateUserDto>();

  return (
    <form onSubmit={handleSubmit(onSignIn)}>
      <Controller
        name="email"
        control={control}
        render={({ field: { ref, ...other } }) => <TextField {...other} inputRef={ref} label="Email" />}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { ref, ...other } }) => (
          <TextField {...other} inputRef={ref} label="Password" type="password" />
        )}
      />

      <Button label="Sign Up" type="button" color="secondary" onClick={handleSubmit(onSignUp)} />
      <Button label="Sign In" type="submit" />
    </form>
  );
};

export default LoginForm;
