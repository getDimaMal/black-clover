import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@black-clover/front/ui/compoents/atoms/Typography/Typography';

import ROUTES from '../routes.json';

const WelcomePage = () => {
  return (
    <Fragment>
      <Typography variant="h1">Welcome to Event Panel</Typography>

      <Link to={ROUTES.LOGIN}>Login</Link>
    </Fragment>
  );
};

export default WelcomePage;
