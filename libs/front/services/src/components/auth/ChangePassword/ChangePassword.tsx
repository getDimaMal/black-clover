import React, { useEffect } from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';

import { useAuth } from '../AuthContext/AuthContext';

export type ChangePasswordProps = {
  token: string;
  children: (props: ChangePasswordFormProps) => React.ReactElement;
};

const ChangePassword: React.FC<ChangePasswordProps> = ({ token, children }) => {
  const { user, isLoading, error, changePassword } = useUserAuth();
  const { login } = useAuth();

  useEffect(() => {
    if (user) {
      login(user);
    }
  }, [login, user]);

  return children({
    error,
    isLoading,
    onSubmit: (data: ChangePasswordNoTokenDto) => changePassword({ ...data, token }),
  });
};

export default ChangePassword;
