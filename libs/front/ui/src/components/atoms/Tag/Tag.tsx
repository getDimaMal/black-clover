import React, { FC } from 'react';

import useStyles from './Tag.styles';

export type TagColors = 'primary' | 'success' | 'info';

export type TagProps = {
  label: string;
  color?: TagColors;
};

const Tag: FC<TagProps> = ({ label, color = 'primary' }) => {
  const { classes } = useStyles({ color });
  return (
    <div className={classes.root}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" />
      </svg>
      {label}
    </div>
  );
};

export default Tag;
