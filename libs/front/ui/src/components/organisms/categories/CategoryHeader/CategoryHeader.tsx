import React, { FC } from 'react';

import Button from '../../../atoms/Buttons/Button/Button';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './CategoryHeader.styles';

export type CategoryHeaderProps = {
  name: string;
};

const CategoryHeader: FC<CategoryHeaderProps> = ({ name }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">{name}</Typography>

      <div className={classes.buttonGroup}>
        <Button variant="contained" label="New Event" />
        <Button variant="outlined" label="New Category" />
      </div>
    </div>
  );
};

export default CategoryHeader;
