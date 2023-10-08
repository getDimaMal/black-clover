import React from 'react';

import useStyles from './TableRow.styles';

export type TableRowProps = {
  children: React.ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
  const { classes } = useStyles();

  return <tr className={classes.root}>{children}</tr>;
};

export default TableRow;
