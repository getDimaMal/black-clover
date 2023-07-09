import React, { FC } from 'react';
import useUserSignRequests from '@black-clover/front/redux/hooks/useUserSignRequests';
import { LoginFormUIType } from '@black-clover/front/shared/types/auth.type';

export type LoginFormProps = {
  children: (props: LoginFormUIType) => React.ReactElement;
};

const LoginForm: FC<LoginFormProps> = ({ children }) => {
  const { error, isLoading, signUp, signIn } = useUserSignRequests();

  return children({
    error,
    isLoading,
    onSignUp: signUp,
    onSignIn: signIn,
  });
};

export default LoginForm;
