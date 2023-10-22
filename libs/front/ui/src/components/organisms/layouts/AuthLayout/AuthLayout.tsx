import React, { FC } from 'react';

import Paper from '../../../atoms/Paper/Paper';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './AuthLayout.styles';

export type AuthLayoutProps = {
  label: string;
  children: React.ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ label, children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.header}>
          {label}
        </Typography>
        {children}
      </Paper>
    </div>
  );
};

export default AuthLayout;
