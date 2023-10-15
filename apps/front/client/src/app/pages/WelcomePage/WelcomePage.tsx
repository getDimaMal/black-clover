import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@black-clover/front/ui/components/atoms/Logo/Logo';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';

import ROUTES from '../routes.json';

const WelcomePage = () => {
  return (
    <Fragment>
      <Logo />

      <Typography variant="h1">Welcome to Event Panel</Typography>

      <Link to={ROUTES.LOGIN}>Login</Link>
    </Fragment>
  );
};

export default WelcomePage;
