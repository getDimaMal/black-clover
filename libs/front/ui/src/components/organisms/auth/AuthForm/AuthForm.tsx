import React, { FC } from 'react';

import Loader from '../../../atoms/Loader/Loader';
import Alert from '../../../atoms/Messages/Alert/Alert';

import useStyles from './AuthForm.styles';

export type AuthFormProps = {
  isLoading: boolean;
  errorMessage: string | null;
  onSubmit: (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const AuthForm: FC<AuthFormProps> = ({ isLoading, onSubmit, errorMessage, children }) => {
  const { classes } = useStyles();

  return (
    <form noValidate onSubmit={onSubmit} className={classes.root} aria-label="form">
      <Loader isLoading={isLoading} />

      <div className={classes.alert}>{errorMessage && <Alert variant="error" message={errorMessage} />}</div>

      {children}
    </form>
  );
};

export default AuthForm;
