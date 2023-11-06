import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@black-clover/front/services/components/auth/AuthProvider/AuthProvider';
import ChangePassword from '@black-clover/front/services/components/auth/ChangePassword/ChangePassword';
import FieldContainer from '@black-clover/front/services/components/form/FieldContainer';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import Link from '@black-clover/front/ui/components/atoms/Buttons/Link/Link';
import TextField from '@black-clover/front/ui/components/atoms/Inputs/TextField/TextField';
import Loader from '@black-clover/front/ui/components/atoms/Loader/Loader';
import Alert from '@black-clover/front/ui/components/atoms/Messages/Alert/Alert';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

import ROUTES from '../routes.json';

const ChangePasswordPage = () => {
  const { token } = useParams<{ token: string }>();
  const { login } = useAuth();

  return (
    <AuthLayout>
      <ChangePassword
        token={token}
        onSuccess={login}
        render={({ isLoading, error, ...other }) => (
          <AuthLayout.Form>
            <Loader isLoading={isLoading} />

            <Typography centerAlign variant="h3">
              Change Password
            </Typography>

            {error && <Alert variant="error" message={error} />}

            <FieldContainer
              {...other}
              name="password"
              render={(props) => <TextField {...props} autoFocus type="password" label="Password" />}
            />

            <Button fullWidth type="submit" label="Change Password" />

            <Typography centerAlign variant="bodyXS">
              Back to <Link to={ROUTES.SIGN_IN}>Sign IN</Link>
            </Typography>
          </AuthLayout.Form>
        )}
      />
    </AuthLayout>
  );
};

export default ChangePasswordPage;
