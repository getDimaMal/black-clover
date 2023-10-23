import React, { FC } from 'react';
import { ResetPasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Buttons/Button/Button';
import Link from '../../../atoms/Buttons/Link/Link';
import TextField from '../../../atoms/Inputs/TextField/TextField';
import Typography from '../../../atoms/Typography/Typography';
import AuthForm from '../AuthForm/AuthForm';

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ isLoading, errorMessage, onSubmit, changePasswordLink }) => {
  const { handleSubmit, getInputProps } = useForm<CheckEmailDto>({ Resolver: CheckEmailDto, initForm: { email: '' } });

  return (
    <AuthForm isLoading={isLoading} errorMessage={errorMessage} onSubmit={handleSubmit(onSubmit)}>
      <TextField {...getInputProps('email')} autoFocus type="email" label="Email" />

      <Button fullWidth type="submit" label="Reset Password" />

      <Typography centerAlign variant="bodyXS">
        Test link to {changePasswordLink && <Link to={changePasswordLink}>Change Password</Link>}
      </Typography>
    </AuthForm>
  );
};

export default ResetPasswordForm;
