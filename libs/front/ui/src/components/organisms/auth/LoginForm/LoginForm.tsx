import React, { FC } from 'react';
import { LoginFormProps } from '@black-clover/front/shared/types/auth.type';
import { CreateUserDto } from '@black-clover/shared/dto/users/create-user.dto';

import useForm from '../../../../hooks/useForm';
import Button from '../../../atoms/Buttons/Button/Button';
import Link from '../../../atoms/Buttons/Link/Link';
import TextField from '../../../atoms/Inputs/TextField/TextField';
import Loader from '../../../atoms/Loader/Loader';
import Alert from '../../../atoms/Messages/Alert/Alert';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './LoginForm.styles';

const LoginForm: FC<LoginFormProps> = ({ isLoading, resetPasswordLink, error, onSignUp, onSignIn }) => {
  const { classes } = useStyles();
  const { getInputProps, handleSubmit } = useForm<CreateUserDto>({
    initForm: { email: '', password: '' },
    Resolver: CreateUserDto,
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSignIn)} className={classes.root} aria-label="form">
      <Loader isLoading={isLoading} />

      <Typography variant="h2" className={classes.alignCenter}>
        Login
      </Typography>

      <div className={classes.alert}>{error && <Alert variant="error" message={error} />}</div>

      <TextField {...getInputProps('email')} autoFocus type="email" label="Email" />

      <TextField {...getInputProps('password')} type="password" label="Password" />

      <div className={classes.buttonGroup}>
        <Button label="Sign In" type="submit" />
        <Button label="Sign Up" variant="outlined" onClick={handleSubmit(onSignUp)} />
      </div>

      <Typography variant="bodyXS" className={classes.alignCenter}>
        Forgot password? <Link to={resetPasswordLink}>Reset</Link>
      </Typography>
    </form>
  );
};

export default LoginForm;
