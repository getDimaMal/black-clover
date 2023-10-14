import React, { FC } from 'react';
import { CheckEmailFormProps } from '@black-clover/front/shared/types/auth.type';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';

import useForm from '../../../../hooks/useForm';
import Alert from '../../../atoms/Alert/Alert';
import Button from '../../../atoms/Buttons/Button/Button';
import Link from '../../../atoms/Link/Link';
import Loader from '../../../atoms/Loader/Loader';
import TextField from '../../../atoms/TextField/TextField';

import useStyles from './CheckEmailForm.styles';

type TCheckEmailFormTestID = keyof CheckEmailDto | 'checkEmailForm' | 'checkEmailLoader' | 'checkEmailSubmit';

export const CheckEmailFormTestID: Record<TCheckEmailFormTestID, TCheckEmailFormTestID> = {
  email: 'email',
  checkEmailForm: 'checkEmailForm',
  checkEmailLoader: 'checkEmailLoader',
  checkEmailSubmit: 'checkEmailSubmit',
};

const CheckEmailForm: FC<CheckEmailFormProps> = ({ isLoading, error, onSubmit, token }) => {
  const { classes } = useStyles();
  const { handleSubmit, getInputProps } = useForm<CheckEmailDto>({ Resolver: CheckEmailDto, initForm: { email: '' } });

  return (
    <form
      noValidate
      className={classes.root}
      onSubmit={handleSubmit(onSubmit)}
      data-testid={CheckEmailFormTestID['checkEmailForm']}
    >
      <Loader isLoading={isLoading} testId={CheckEmailFormTestID['checkEmailLoader']} />

      <TextField
        {...getInputProps('email')}
        autoFocus
        type="email"
        label="Email"
        testId={CheckEmailFormTestID['email']}
      />

      {token && <Link to={`/login/changePassword?${token}`}>Change Password (It's for a test)</Link>}

      <Alert color="error" message={error || ''} />

      <Button type="submit" label="Send E-Mail" />
    </form>
  );
};

export default CheckEmailForm;
