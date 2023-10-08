import React, { FC } from 'react';

import useStyles from './TableContainer.styles';

export type TableContainerProps = {
  name: string;
  label: string;
  subLabel: string;
  children: React.ReactNode;
};

const TableContainer: FC<TableContainerProps> = ({ name, label, subLabel, children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <div className={classes.label}>{label}</div>
          <div className={classes.block}>{name}</div>
        </div>

        <div className={classes.subLabel}>{subLabel}</div>
      </div>

      <table className={classes.table}>{children}</table>

      <div className={classes.footer} />
    </div>
  );
};

export default TableContainer;
