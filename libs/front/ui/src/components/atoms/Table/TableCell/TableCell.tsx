import React, { FC } from 'react';

import useStyles from './TableCell.styles';

export type TableCellProps = {
  children: React.ReactNode;
  isHeader?: boolean;
};

const TableCell: FC<TableCellProps> = ({ children, isHeader = false }) => {
  const { classes, cx } = useStyles();

  const Tag = (isHeader ? 'th' : 'td') as React.ElementType;

  return <Tag className={cx(classes.root, { [classes.header]: isHeader })}>{children}</Tag>;
};

export default TableCell;
