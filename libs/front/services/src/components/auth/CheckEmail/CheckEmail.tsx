import React from 'react';
import { CheckEmailFormProps } from '@black-clover/front/shared/types/auth.type';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';

type CheckEmailProps = {
  children: (props: CheckEmailFormProps) => React.ReactElement;
};

const CheckEmail: React.FC<CheckEmailProps> = ({ children }) => {
  return children({
    error: 'Error',
    isLoading: false,
    onSubmit: (data: CheckEmailDto) => console.log('Check Email:', data),
  });
};

export default CheckEmail;
