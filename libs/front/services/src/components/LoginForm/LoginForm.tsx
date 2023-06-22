import React, { FC } from 'react';
import { LoginFormUIType } from '@black-clover/front/shared/types/auth';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

export type LoginFormProps = {
  children: (props: LoginFormUIType) => React.ReactElement;
};

const LoginForm: FC<LoginFormProps> = ({ children }) => {
  const handleSignUp = (data: CreateUserDto) => {
    console.log('Sign UP', data);
  };

  const handleSignIn = (data: CreateUserDto) => {
    console.log('Sign IN', data);
  };

  return children({
    onSignUp: handleSignUp,
    onSignIn: handleSignIn,
    isLoading: false,
  });
};

export default LoginForm;
