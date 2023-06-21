import React, { FC } from 'react';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

export type LoginFormProps = {
  children: (props: {
    defaultValues: CreateUserDto;
    onSignUp: (data: CreateUserDto) => void;
    onSignIn: (data: CreateUserDto) => void;
  }) => React.ReactElement;
};

const LoginForm: FC<LoginFormProps> = ({ children }) => {
  const defaultValues: CreateUserDto = {
    email: '',
    password: '',
  };

  const handleSignUp = (data: CreateUserDto) => {
    console.log('Sign UP', data);
  };

  const handleSignIn = (data: CreateUserDto) => {
    console.log('Sign IN', data);
  };

  return children({
    defaultValues,
    onSignUp: handleSignUp,
    onSignIn: handleSignIn,
  });
};

export default LoginForm;
