import React from 'react';
import { useResetPassword } from '@black-clover/front/api';
import { ResetPasswordFormProps } from '@black-clover/front/shared/types/auth.type';

type CheckEmailProps = {
  changePasswordLink: string;
  children: (props: ResetPasswordFormProps) => React.ReactElement;
};

const ResetPassword: React.FC<CheckEmailProps> = ({ changePasswordLink, children }) => {
  const { user, error, isLoading, resetPassword } = useResetPassword();

  return children({
    isLoading,
    errorMessage: error,
    onSubmit: resetPassword,
    changePasswordLink: user?.token ? `${changePasswordLink}/${user.token}` : null,
  });
};

export default ResetPassword;
