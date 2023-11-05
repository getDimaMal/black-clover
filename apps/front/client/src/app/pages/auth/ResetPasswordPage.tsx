import React from 'react';
import ResetPassword from '@black-clover/front/services/components/auth/ResetPassword/ResetPassword';
import FieldContainer from '@black-clover/front/services/components/form/FieldContainer';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import Link from '@black-clover/front/ui/components/atoms/Buttons/Link/Link';
import TextField from '@black-clover/front/ui/components/atoms/Inputs/TextField/TextField';
import Loader from '@black-clover/front/ui/components/atoms/Loader/Loader';
import Alert from '@black-clover/front/ui/components/atoms/Messages/Alert/Alert';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

import ROUTES from '../routes.json';

const ResetPasswordPage = () => {
  return (
    <AuthLayout>
      <ResetPassword
        render={({ isLoading, error, token, ...other }) => (
          <AuthLayout.Form>
            <Loader isLoading={isLoading} />

            <Typography centerAlign variant="h3">
              Reset Password
            </Typography>

            {error && <Alert variant="error" message={error} />}

            <FieldContainer
              {...other}
              name="email"
              render={(props) => <TextField {...props} autoFocus type="email" label="Email" />}
            />

            <Button fullWidth type="submit" label="Reset Password" />

            <Typography centerAlign variant="bodyXS">
              Test link to {token && <Link to={`${ROUTES.CHANGE_PASSWORD}/${token}`}>Change Password</Link>}
            </Typography>
          </AuthLayout.Form>
        )}
      />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
