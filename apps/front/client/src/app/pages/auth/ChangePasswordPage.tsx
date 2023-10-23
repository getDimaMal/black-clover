import { useParams } from 'react-router-dom';
import ChangePassword from '@black-clover/front/services/components/auth/ChangePassword/ChangePassword';
import ChangePasswordForm from '@black-clover/front/ui/components/organisms/auth/ChangePasswordForm/ChangePasswordForm';

const ChangePasswordPage = () => {
  const { token } = useParams<{ token: string }>();

  return <ChangePassword token={token}>{(props) => <ChangePasswordForm {...props} />}</ChangePassword>;
};

export default ChangePasswordPage;
