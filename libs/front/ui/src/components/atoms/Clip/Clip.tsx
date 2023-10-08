import React, { FC } from 'react';

import useStyles from './Clip.styles';

export type ClipProps = {
  label: string;
};

const Clip: FC<ClipProps> = ({ label }) => {
  const { classes } = useStyles();
  return <div className={classes.root}>{label}</div>;
};

export default Clip;
