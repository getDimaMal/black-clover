import React, { FC } from 'react';

import useStyles from './Grid.styles';

type GridContainerProps = {
  container: boolean;
} & Partial<{
  direction: 'row' | 'column';
  gap: number;

  item: never;
  size: never;
}>;

type GridItemProps = {
  item: boolean;
} & Partial<{
  size: number;

  container: never;
  direction: never;
  gap: never;
}>;

export type GridProps = {
  children: React.ReactNode;
};

const Grid: FC<GridProps & (GridContainerProps | GridItemProps)> = ({
  container,
  item,
  gap,
  size,
  direction,
  children,
}) => {
  const { classes, cx } = useStyles({ gap, size, direction });

  return <div className={cx({ [classes.container]: container, [classes.item]: item })}>{children}</div>;
};

export default Grid;
