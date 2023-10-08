import React from 'react';

import TableCell from '../../atoms/Table/TableCell/TableCell';
import TableContainer, { TableContainerProps } from '../../atoms/Table/TableContainer/TableContainer';
import TableRow from '../../atoms/Table/TableRow/TableRow';

type Row<T extends string[] = string[]> = Record<T[number], React.ReactNode>;

export type CategoryTableProps<T extends string[] = string[]> = Omit<TableContainerProps, 'children'> & {
  columns: T;
  head: Row<T>;
  body: Row<T>[];
};

const CategoryTable = <T extends string[] = string[]>({ columns, head, body, ...other }: CategoryTableProps<T>) => {
  const renderCells = (source: Row, isHeader = false) => {
    return columns.map((column, index) => (
      <TableCell key={index} isHeader={isHeader}>
        {source[column]}
      </TableCell>
    ));
  };

  return (
    <TableContainer {...other}>
      <thead>
        <TableRow>{renderCells(head, true)}</TableRow>
      </thead>

      <tbody>
        {body.map((row, index) => (
          <TableRow key={index}>{renderCells(row)}</TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default CategoryTable;
