import React from 'react';
import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';

type ChangePasswordProps = {
  children: (props: ChangePasswordFormProps) => React.ReactElement;
};

const ChangePassword: React.FC<ChangePasswordProps> = ({ children }) => {
  return children({
    isLoading: false,
    error: 'some error',
    onSubmit: (data: ChangePasswordNoTokenDto) => console.log('!!! Change', data),
  });
};

export default ChangePassword;
