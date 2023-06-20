import React, { FC } from 'react';

import useStyles from './ProgressBar.styles';

export type ProgressBarProps = {
  isLoading?: boolean;
};

const ProgressBar: FC<ProgressBarProps> = ({ isLoading }) => {
  const { classes } = useStyles();

  if (!isLoading) return null;

  return <div className={classes.root}>Loading...</div>;
};

export default ProgressBar;
