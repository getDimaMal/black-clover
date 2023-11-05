import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '@black-clover/front/services/components/auth/AuthContext/AuthContext';
import SignIn from '@black-clover/front/services/components/auth/SignIn/SignIn';
import FieldContainer from '@black-clover/front/services/components/form/FieldContainer';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import ButtonGroup from '@black-clover/front/ui/components/atoms/Buttons/ButtonGroup/ButtonGroup';
import Link from '@black-clover/front/ui/components/atoms/Buttons/Link/Link';
import TextField from '@black-clover/front/ui/components/atoms/Inputs/TextField/TextField';
import Loader from '@black-clover/front/ui/components/atoms/Loader/Loader';
import Alert from '@black-clover/front/ui/components/atoms/Messages/Alert/Alert';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

import ROUTES from '../routes.json';

const SignInPage = () => {
  const history = useHistory();
  const { login } = useAuth();

  return (
    <AuthLayout>
      <SignIn
        onSuccess={login}
        render={({ isLoading, error, ...other }) => (
          <AuthLayout.Form>
            <Loader isLoading={isLoading} />

            <Typography centerAlign variant="h3">
              Sign In
            </Typography>

            {error && <Alert variant="error" message={error} />}

            <FieldContainer
              {...other}
              name="email"
              render={(props) => <TextField {...props} autoFocus type="email" label="Email" />}
            />

            <FieldContainer
              {...other}
              name="password"
              render={(props) => <TextField {...props} type="password" label="Password" />}
            />

            <ButtonGroup>
              <Button fullWidth label="Sign In" type="submit" />
              <Button fullWidth label="Sign Up" variant="outlined" onClick={() => history.push(ROUTES.SIGN_UP)} />
            </ButtonGroup>

            <Typography centerAlign variant="bodyXS">
              Forgot password? <Link to={ROUTES.RESET_PASSWORD}>Reset</Link>
            </Typography>
          </AuthLayout.Form>
        )}
      />
    </AuthLayout>
  );
};

export default SignInPage;
