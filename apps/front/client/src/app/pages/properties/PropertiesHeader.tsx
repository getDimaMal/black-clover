import React, { FC } from 'react';
import Button from '@black-clover/front/ui/components/atoms/Buttons/Button/Button';
import Grid from '@black-clover/front/ui/components/atoms/Grid/Grid';
import Typography from '@black-clover/front/ui/components/atoms/Typography/Typography';

type PropertiesHeaderProps = {
  onNew: () => void;
  SearchField: React.ReactNode;
};

const PropertiesHeader: FC<PropertiesHeaderProps> = ({ onNew, SearchField }) => {
  return (
    <Grid container direction="column" gap={5}>
      <Grid item>
        <Grid container gap={10}>
          <Grid item>
            <Typography variant="h2">Properties</Typography>
          </Grid>
          <Grid item>
            <Button label="New Property" onClick={() => onNew()} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container gap={4}>
          <Grid item size={1}>
            {SearchField}
          </Grid>
          <Grid item size={2} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PropertiesHeader;
