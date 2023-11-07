import React, { FC } from 'react';

import Chips from '../../../atoms/Chips/Chips';
import Table from '../../../atoms/Table/Table';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './EventsTable.styles';

type Columns = 'name' | 'parameters' | 'sources' | 'tags';

type Event = {
  name: string;
  description: string;
  parameters: string[];
  sources: string[];
  tags: string[];
};

export type CategoriesTableProps = {
  name: string;
  eventsCount: number;
  columns: Columns[];
  columnsName: Record<Columns, string>;
  events: Event[];
};

const EventsTable: FC<CategoriesTableProps> = ({ name, eventsCount, columns, columnsName, events }) => {
  const { classes, cx } = useStyles();

  const rednerHeaderLeft = () => {
    return (
      <div className={classes.headerLeft}>
        <Typography variant="bodyXS" className={classes.colorGrey}>
          Category
        </Typography>
        <Typography variant="bodyM" className={classes.fontWeightBold}>
          {name}
        </Typography>
      </div>
    );
  };

  const renderHeaderRight = () => {
    return (
      <Typography variant="bodyS" className={classes.colorGrey}>
        {eventsCount} events
      </Typography>
    );
  };

  const rednerColumnsHeader = () => {
    return columns.map((column, index) => (
      <Table.TableCell key={index} isHeader>
        <Typography variant="bodyXS">{columnsName[column]}</Typography>
      </Table.TableCell>
    ));
  };

  const renderEvents = () => {
    return events.map(({ name, description, parameters, sources, tags }, index) => (
      <Table.TableRow key={index}>
        {columns.includes('name') && (
          <Table.TableCell>
            <div className={cx(classes.cellFlexColumn, classes.cellGap)}>
              <Typography variant="bodyS">{name}</Typography>
              <Typography variant="bodyXS" className={classes.colorGrey}>
                {description}
              </Typography>
            </div>
          </Table.TableCell>
        )}

        {columns.includes('parameters') && (
          <Table.TableCell>
            <div className={classes.cellFlexColumn}>
              {parameters.map((parameter, index) => (
                <Typography key={index} variant="bodyXS" className={classes.colorGrey}>
                  {parameter}
                </Typography>
              ))}
            </div>
          </Table.TableCell>
        )}

        {columns.includes('sources') && (
          <Table.TableCell>
            <div className={classes.cellFlexRow}>
              {sources.map((source, index) => (
                <Chips key={index} label={source} />
              ))}
            </div>
          </Table.TableCell>
        )}

        {columns.includes('tags') && (
          <Table.TableCell>
            <div className={cx(classes.cellFlexRow, classes.cellWrap)}>
              {tags.map((source, index) => (
                <Chips key={index} label={source} />
              ))}
            </div>
          </Table.TableCell>
        )}
      </Table.TableRow>
    ));
  };

  return (
    <Table HeaderLeft={rednerHeaderLeft()} HeaderRight={renderHeaderRight()}>
      <thead>
        <Table.TableRow>{rednerColumnsHeader()}</Table.TableRow>
      </thead>
      <tbody>{renderEvents()}</tbody>
    </Table>
  );
};

export default EventsTable;
