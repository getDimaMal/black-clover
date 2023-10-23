import React from 'react';
import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Buttons/Button/Button';
import TextField from '../../../atoms/Inputs/TextField/TextField';
import AuthForm from '../AuthForm/AuthForm';

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ isLoading, errorMessage, onSubmit }) => {
  const { getInputProps, handleSubmit } = useForm<ChangePasswordNoTokenDto>({
    Resolver: ChangePasswordNoTokenDto,
    initForm: { password: '' },
  });

  return (
    <AuthForm isLoading={isLoading} errorMessage={errorMessage} onSubmit={handleSubmit(onSubmit)}>
      <TextField {...getInputProps('password')} autoFocus type="password" label="Password" />

      <Button fullWidth type="submit" label="Change Password" />
    </AuthForm>
  );
};

export default ChangePasswordForm;
