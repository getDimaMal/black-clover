import React from 'react';
import { ChangePasswordFormProps } from '@black-clover/front/shared/types/auth.type';
import { ChangePasswordDto, ChangePasswordNoTokenDto } from '@black-clover/shared/dto/users/change-password.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Buttons/Button/Button';
import TextField from '../../../atoms/Inputs/TextField/TextField';
import Loader from '../../../atoms/Loader/Loader';
import Alert from '../../../atoms/Messages/Alert/Alert';

import useStyles from './ChangePasswordForm.styles';

export type TChangePasswordFormTestID =
  | keyof Omit<ChangePasswordDto, 'token'>
  | 'changePasswordForm'
  | 'changePasswordFormLoader'
  | 'changePasswordFormSubmit';

export const ChangePasswordFormTestID: Record<TChangePasswordFormTestID, TChangePasswordFormTestID> = {
  password: 'password',
  changePasswordForm: 'changePasswordForm',
  changePasswordFormLoader: 'changePasswordFormLoader',
  changePasswordFormSubmit: 'changePasswordFormSubmit',
};

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ isLoading, error, onSubmit }) => {
  const { classes } = useStyles();
  const { getInputProps, handleSubmit } = useForm<ChangePasswordNoTokenDto>({
    Resolver: ChangePasswordNoTokenDto,
    initForm: { password: '' },
  });

  return (
    <form
      noValidate
      className={classes.root}
      onSubmit={handleSubmit(onSubmit)}
      data-testid={ChangePasswordFormTestID['changePasswordForm']}
    >
      <Loader isLoading={isLoading} testId={ChangePasswordFormTestID['changePasswordFormLoader']} />

      <TextField {...getInputProps('password')} autoFocus type="password" label="Password" />

      <Alert variant="error" message={error || ''} />

      <Button type="submit" label="Change Password" />
    </form>
  );
};

export default ChangePasswordForm;
