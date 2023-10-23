import React, { FC, useEffect } from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { SignInFormProps } from '@black-clover/front/shared/types/auth.type';

import { useAuth } from '../AuthContext/AuthContext';

export type SignInProps = {
  onSignUp: () => void;
  resetPasswordLink: string;
  children: (props: SignInFormProps) => React.ReactElement;
};

const SignIn: FC<SignInProps> = ({ onSignUp, resetPasswordLink, children }) => {
  const { user, isLoading, clear, signIn, error } = useUserAuth();
  const { login } = useAuth();

  useEffect(() => {
    return () => clear();
  }, []);

  useEffect(() => {
    if (user) {
      login(user);
    }
  }, [login, user]);

  return children({
    onSignUp,
    isLoading,
    resetPasswordLink,
    onSignIn: signIn,
    errorMessage: error,
  });
};

export default SignIn;
