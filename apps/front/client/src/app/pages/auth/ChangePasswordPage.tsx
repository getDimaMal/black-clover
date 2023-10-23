import { useParams } from 'react-router-dom';
import ChangePassword from '@black-clover/front/services/components/auth/ChangePassword/ChangePassword';
import ChangePasswordForm from '@black-clover/front/ui/components/organisms/auth/ChangePasswordForm/ChangePasswordForm';
import AuthLayout from '@black-clover/front/ui/components/organisms/layouts/AuthLayout/AuthLayout';

const ChangePasswordPage = () => {
  const { token } = useParams<{ token: string }>();

  return (
    <AuthLayout label="New Password">
      <ChangePassword token={token}>{(props) => <ChangePasswordForm {...props} />}</ChangePassword>
    </AuthLayout>
  );
};

export default ChangePasswordPage;
