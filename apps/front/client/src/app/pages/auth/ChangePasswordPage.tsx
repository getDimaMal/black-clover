import ChangePassword from '@black-clover/front/services/components/auth/ChangePassword/ChangePassword';
import ChangePasswordForm from '@black-clover/front/ui/compoents/organisms/auth/ChangePasswordForm/ChangePasswordForm';

const ChangePasswordPage = () => {
  return <ChangePassword token="some-token">{(props) => <ChangePasswordForm {...props} />}</ChangePassword>;
};

export default ChangePasswordPage;
