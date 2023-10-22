import React, { FC, useEffect } from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { SignInFormProps } from '@black-clover/front/shared/types/auth.type';

import { useAuth } from '../AuthContext/AuthContext';

export type LoginProps = {
  onSignUp: () => void;
  changePasswordLink: string;
  children: (props: SignInFormProps) => React.ReactElement;
};

const SignIn: FC<LoginProps> = ({ onSignUp, changePasswordLink, children }) => {
  const { user, isLoading, signIn, error } = useUserAuth();
  const { login } = useAuth();

  useEffect(() => {
    if (user) {
      login(user);
    }
  }, [login, user]);

  return children({
    onSignUp,
    isLoading,
    changePasswordLink,
    onSignIn: signIn,
    errorMessage: error,
  });
};

export default SignIn;
