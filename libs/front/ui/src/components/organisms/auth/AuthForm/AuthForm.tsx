import React, { FC } from 'react';

import Loader from '../../../atoms/Loader/Loader';
import Alert from '../../../atoms/Messages/Alert/Alert';

import useStyles from './AuthForm.styles';

export type AuthFormProps = {
  isLoading: boolean;
  errorMessage: string | null;
  handleSubmit: (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const AuthForm: FC<AuthFormProps> = ({ isLoading, handleSubmit, errorMessage, children }) => {
  const { classes } = useStyles();

  return (
    <form noValidate onSubmit={handleSubmit} className={classes.root} aria-label="form">
      <Loader isLoading={isLoading} />

      <div className={classes.alert}>{errorMessage && <Alert variant="error" message={errorMessage} />}</div>

      {children}
    </form>
  );
};

export default AuthForm;
