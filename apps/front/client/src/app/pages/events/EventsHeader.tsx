import React, { FC } from 'react';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import ButtonGroup from '@black-clover/front/ui/components/atoms/Buttons/ButtonGroup/ButtonGroup';
import Grid from '@black-clover/front/ui/components/atoms/Grid/Grid';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';

type EventsHeaderProps = {
  name: string;
  onCreateEventClick: () => void;
  onCreateCategoryClick: () => void;
  children: React.ReactNode;
};

const EventsHeader: FC<EventsHeaderProps> = ({ name, onCreateEventClick, onCreateCategoryClick, children }) => {
  return (
    <Grid container direction="column" gap={5}>
      <Grid item>
        <Grid container gap={10}>
          <Grid item>
            <Typography variant="h2">{name}</Typography>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button variant="contained" label="New Event" onClick={onCreateEventClick} />
              <Button variant="outlined" label="New Category" onClick={onCreateCategoryClick} />
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container gap={4}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventsHeader;
