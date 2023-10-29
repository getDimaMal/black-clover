import React from 'react';

import useStyles from './Table.styles';

type TableCellProps = {
  children: React.ReactNode;
} & Partial<{
  isHeader: boolean;
}>;

type TableRowProps = {
  children: React.ReactNode;
};

type TableComposition = {
  TableRow: (props: TableRowProps) => JSX.Element;
  TableCell: (props: TableCellProps) => JSX.Element;
};

export type TableProps = {
  children: React.ReactNode;
} & Partial<{
  HeaderLeft: React.ReactNode;
  HeaderRight: React.ReactNode;
}>;

type TableWrapper = (props: TableProps) => JSX.Element;

const Table: TableComposition & TableWrapper = ({ children: Table, HeaderLeft, HeaderRight }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>{HeaderLeft}</div>
        <div>{HeaderRight}</div>
      </div>

      <table className={classes.table}>{Table}</table>

      <div className={classes.footer} />
    </div>
  );
};

const TableRow = ({ children }: TableRowProps) => {
  const { classes } = useStyles();

  return <tr className={classes.tableRow}>{children}</tr>;
};

const TableCell = ({ children, isHeader = false }: TableCellProps) => {
  const { classes, cx } = useStyles();

  const Tag = (isHeader ? 'th' : 'td') as React.ElementType;

  return <Tag className={cx(classes.tableCell)}>{children}</Tag>;
};

Table.TableRow = TableRow;
Table.TableCell = TableCell;

export default Table;
