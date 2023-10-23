import React from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { ResetPasswordFormProps } from '@black-clover/front/shared/types/auth.type';

type CheckEmailProps = {
  changePasswordLink: string;
  children: (props: ResetPasswordFormProps) => React.ReactElement;
};

const ResetPassword: React.FC<CheckEmailProps> = ({ changePasswordLink, children }) => {
  const { token, error, isLoading, checkEmail } = useUserAuth();

  console.log(error);

  return children({
    isLoading,
    errorMessage: error,
    onSubmit: checkEmail,
    changePasswordLink: token ? `${changePasswordLink}/${token}` : null,
  });
};

export default ResetPassword;
