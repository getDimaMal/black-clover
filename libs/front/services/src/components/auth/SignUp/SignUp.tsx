import React, { FC, useEffect } from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { SignUpFormProps } from '@black-clover/front/shared/types/auth.type';

import { useAuth } from '../AuthContext/AuthContext';

export type SignUpProps = {
  signInLink: string;
  children: (props: SignUpFormProps) => React.ReactElement;
};

const SignUp: FC<SignUpProps> = ({ signInLink, children }) => {
  const { user, isLoading, signUp, error } = useUserAuth();
  const { login } = useAuth();

  useEffect(() => {
    if (user) {
      login(user);
    }
  }, [login, user]);

  return children({
    isLoading,
    signInLink,
    onSignUp: signUp,
    errorMessage: error,
  });
};

export default SignUp;
