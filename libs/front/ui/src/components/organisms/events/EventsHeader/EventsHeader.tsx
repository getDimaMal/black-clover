import React, { FC } from 'react';

import Button from '../../../atoms/Buttons/Button/Button';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './EventsHeader.styles';

export type CategoryHeaderProps = {
  name: string;
  Search: React.ReactNode;
  Filters: React.ReactNode;
  onCreateEventClick: () => void;
  onCreateCategoryClick: () => void;
};

const EventsHeader: FC<CategoryHeaderProps> = ({
  name,
  Search,
  Filters,
  onCreateEventClick,
  onCreateCategoryClick,
}) => {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <div className={cx(classes.row, classes.gap10)}>
        <Typography variant="h2">{name}</Typography>

        <div className={cx(classes.row, classes.gap5)}>
          <Button variant="contained" label="New Event" onClick={onCreateEventClick} />
          <Button variant="outlined" label="New Category" onClick={onCreateCategoryClick} />
        </div>
      </div>

      <div className={cx(classes.row, classes.gap4)}>
        <div className={classes.search}>{Search}</div>

        <div className={cx(classes.row, classes.gap4, classes.filters)}>{Filters}</div>
      </div>
    </div>
  );
};

export default EventsHeader;
