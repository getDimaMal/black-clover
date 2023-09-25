import React, { FC } from 'react';

import useStyles from './Alert.styles';

export type Colors = 'main' | 'info' | 'warning' | 'success' | 'error';
export type Variants = 'bodyM' | 'textM';

export type AlertProps = {
  message: string;
} & Partial<{
  color: Colors;
  variant: Variants;
  className: string;
}>;

const Alert: FC<AlertProps> = ({ message, className, color = 'info', variant = 'textM' }) => {
  const { classes, cx } = useStyles({ color });

  return <p className={cx(classes.root, classes[variant], className)}>{message}</p>;
};

export default Alert;
