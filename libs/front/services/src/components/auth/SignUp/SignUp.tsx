import React, { FC, useEffect } from 'react';
import { useSignUp } from '@black-clover/front/api';
import { SignUpFormProps } from '@black-clover/front/shared/types/auth.type';

import { useAuth } from '../AuthContext/AuthContext';

export type SignUpProps = {
  signInLink: string;
  children: (props: SignUpFormProps) => React.ReactElement;
};

const SignUp: FC<SignUpProps> = ({ signInLink, children }) => {
  const { login } = useAuth();
  const { signUp, user, isLoading, error } = useSignUp();

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
