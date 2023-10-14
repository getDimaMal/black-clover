import React from 'react';

import { useStyles } from './Link.styles';

export type LinkProps = {
  to: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { classes } = useStyles();

  return (
    <a href={to} className={classes.root}>
      {children}
    </a>
  );
};

export default Link;
