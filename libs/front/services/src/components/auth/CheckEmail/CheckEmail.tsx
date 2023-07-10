import React, { useEffect } from 'react';
import useUserAuth from '@black-clover/front/redux/hooks/useUserAuth';
import { CheckEmailFormProps } from '@black-clover/front/shared/types/auth.type';

type CheckEmailProps = {
  children: (props: CheckEmailFormProps) => React.ReactElement;
};

const CheckEmail: React.FC<CheckEmailProps> = ({ children }) => {
  const { token, error, isLoading, checkEmail } = useUserAuth();

  useEffect(() => {
    token && console.log(token);
  }, [token]);

  return children({
    error,
    isLoading,
    onSubmit: checkEmail,
  });
};

export default CheckEmail;