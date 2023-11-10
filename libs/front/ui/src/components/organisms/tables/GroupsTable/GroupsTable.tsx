import React, { FC } from 'react';

import Table from '../../../atoms/Table/Table';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './GroupsTable.styles';

export type Group = {
  id: string;
  name: string;
  description: string;
  categoriesAmount: number;
  eventsAmount: number;
};

export type GroupsTableProps = {
  groups: Group[];
};

const GroupsTable: FC<GroupsTableProps> = ({ groups }) => {
  const { classes } = useStyles();

  const renderGroups = () => {
    return groups.map(({ id, name, description, eventsAmount, categoriesAmount }) => (
      <Table.TableRow key={id} isFlex>
        <Table.TableCell size={1} className={classes.flexCell}>
          <Typography variant="bodyS">{name}</Typography>
          <Typography variant="bodyXS" color="secondary">
            {description}
          </Typography>
        </Table.TableCell>
        <Table.TableCell size={1} className={classes.flexCell}>
          {categoriesAmount}
        </Table.TableCell>
        <Table.TableCell size={1} className={classes.flexCell}>
          {eventsAmount}
        </Table.TableCell>
      </Table.TableRow>
    ));
  };

  return (
    <Table>
      <thead>
        <Table.TableRow isFlex>
          <Table.TableCell isHeader size={1}>
            Name
          </Table.TableCell>
          <Table.TableCell isHeader size={1}>
            Amount of Categories
          </Table.TableCell>
          <Table.TableCell isHeader size={1}>
            Amount of Events
          </Table.TableCell>
        </Table.TableRow>
      </thead>
      <tbody>{renderGroups()}</tbody>
    </Table>
  );
};

export default GroupsTable;
