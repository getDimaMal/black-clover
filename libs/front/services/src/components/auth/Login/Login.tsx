import React, { FC } from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { LoginFormProps } from '@black-clover/front/shared/types/auth.type';

export type LoginProps = {
  children: (props: LoginFormProps) => React.ReactElement;
};

const Login: FC<LoginProps> = ({ children }) => {
  const { error, isLoading, signUp, signIn } = useUserAuth();

  return children({
    error,
    isLoading,
    onSignUp: signUp,
    onSignIn: signIn,
  });
};

export default Login;
