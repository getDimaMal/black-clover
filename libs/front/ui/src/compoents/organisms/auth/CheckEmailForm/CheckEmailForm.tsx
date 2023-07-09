import React, { FC } from 'react';
import { CheckEmailFormProps } from '@black-clover/front/shared/types/auth.type';
import { CheckEmailDto } from '@black-clover/shared/dto/users/check-email.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Button/Button';
import Loader from '../../../atoms/Loader/Loader';
import TextField from '../../../atoms/TextField/TextField';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './CheckEmailForm.styles';

type TCheckEmailFormTestID = keyof CheckEmailDto | 'checkEmailForm' | 'checkEmailLoader' | 'checkEmailSubmit';

export const CheckEmailFormTestID: Record<TCheckEmailFormTestID, TCheckEmailFormTestID> = {
  email: 'email',
  checkEmailForm: 'checkEmailForm',
  checkEmailLoader: 'checkEmailLoader',
  checkEmailSubmit: 'checkEmailSubmit',
};

const CheckEmailForm: FC<CheckEmailFormProps> = ({ isLoading, error, onSubmit }) => {
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

      <TextField {...getInputProps('email')} autoFocus label="Email" testId={CheckEmailFormTestID['email']} />

      <Typography variant="bodyS" className={classes.error}>
        {error}
      </Typography>

      <Button type="submit" label="Send E-Mail" testId={CheckEmailFormTestID['checkEmailSubmit']} />
    </form>
  );
};

export default CheckEmailForm;
