import React from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';

export type ChangePasswordProps = {
  token: string;
  children: (props: ChangePasswordFormProps) => React.ReactElement;
};

const ChangePassword: React.FC<ChangePasswordProps> = ({ token, children }) => {
  const { isLoading, error, changePassword } = useUserAuth();

  const handleChangePassword = (data: ChangePasswordNoTokenDto) => {
    changePassword({ ...data, token });
  };

  return children({
    error,
    isLoading,
    onSubmit: handleChangePassword,
  });
};

export default ChangePassword;
