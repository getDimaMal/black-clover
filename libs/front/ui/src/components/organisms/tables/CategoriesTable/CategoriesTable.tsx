import React, { FC } from 'react';

import Grid from '../../../atoms/Grid/Grid';
import Table from '../../../atoms/Table/Table';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './CategoriesTable.styles';

export type Category = {
  id: string;
  name: string;
  description: string;
  eventsAmount: number;
};

export type CategoriesTableProps = {
  categories: Category[];
} & Partial<{
  groupName: string;
  categoriesAmount: number;
}>;

const CategoriesTable: FC<CategoriesTableProps> = ({ categories, groupName, categoriesAmount = 0 }) => {
  const { classes } = useStyles();

  const renderLeftHeader = () => {
    if (!groupName) return null;
    return (
      <Grid container direction="column" gap={1}>
        <Grid item>
          <Typography variant="bodyXS" color="secondary">
            Group
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="bodyM">{groupName}</Typography>
        </Grid>
      </Grid>
    );
  };

  const renderRightHeader = () => {
    if (categoriesAmount < 2) return null;
    return <Typography variant="bodyS" color="secondary">{`${categoriesAmount} categories`}</Typography>;
  };

  const renderCategories = () => {
    return categories.map(({ id, name, description, eventsAmount }) => (
      <Table.TableRow key={id} isFlex>
        <Table.TableCell size={1} className={classes.flexCell}>
          <Typography variant="bodyS">{name}</Typography>
          <Typography variant="bodyXS" color="secondary">
            {description}
          </Typography>
        </Table.TableCell>
        <Table.TableCell size={2} className={classes.flexCell}>
          <Typography variant="bodyXS" color="secondary">
            {eventsAmount}
          </Typography>
        </Table.TableCell>
      </Table.TableRow>
    ));
  };

  return (
    <Table HeaderLeft={renderLeftHeader()} HeaderRight={renderRightHeader()}>
      <thead>
        <Table.TableRow isFlex>
          <Table.TableCell isHeader size={1}>
            Name
          </Table.TableCell>
          <Table.TableCell isHeader size={2}>
            Amount of Events
          </Table.TableCell>
        </Table.TableRow>
      </thead>

      <tbody>{renderCategories()}</tbody>
    </Table>
  );
};

export default CategoriesTable;
