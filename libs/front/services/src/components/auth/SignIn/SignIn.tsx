import React, { FC, useEffect } from 'react';
import { useSignIn } from '@black-clover/front/api';
import { SignInFormProps } from '@black-clover/front/shared/types/auth.type';

import { useAuth } from '../AuthContext/AuthContext';

export type SignInProps = {
  onSignUp: () => void;
  resetPasswordLink: string;
  children: (props: SignInFormProps) => React.ReactElement;
};

const SignIn: FC<SignInProps> = ({ onSignUp, resetPasswordLink, children }) => {
  const { signIn, user, isLoading, error } = useSignIn();
  const { login } = useAuth();

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
