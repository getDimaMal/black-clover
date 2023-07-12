import { useLocation } from 'react-router-dom';
import ChangePassword from '@black-clover/front/services/components/auth/ChangePassword/ChangePassword';
import ChangePasswordForm from '@black-clover/front/ui/compoents/organisms/auth/ChangePasswordForm/ChangePasswordForm';

const ChangePasswordPage = () => {
  const { search } = useLocation();

  return <ChangePassword token={search.slice(1)}>{(props) => <ChangePasswordForm {...props} />}</ChangePassword>;
};

export default ChangePasswordPage;
