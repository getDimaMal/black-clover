import React, { FC, useEffect } from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { LoginFormProps } from '@black-clover/front/shared/types/auth.type';

import { useAuth } from '../AuthContext/AuthContext';

export type LoginProps = {
  children: (props: LoginFormProps) => React.ReactElement;
  resetPasswordLink: string;
};

const Login: FC<LoginProps> = ({ children, resetPasswordLink }) => {
  const { user, error, isLoading, signUp, signIn } = useUserAuth();
  const { login } = useAuth();

  useEffect(() => {
    if (user) {
      login(user);
    }
  }, [login, user]);

  return children({
    resetPasswordLink,
    error,
    isLoading,
    onSignUp: signUp,
    onSignIn: signIn,
  });
};

export default Login;
