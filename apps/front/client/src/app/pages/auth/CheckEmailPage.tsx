import React from 'react';
import CheckEmail from '@black-clover/front/services/components/auth/CheckEmail/CheckEmail';
import CheckEmailForm from '@black-clover/front/ui/compoents/organisms/auth/CheckEmailForm/CheckEmailForm';

const CheckEmailPage = () => {
  return <CheckEmail>{(props) => <CheckEmailForm {...props} />}</CheckEmail>;
};

export default CheckEmailPage;
