import React, { FC } from 'react';

import useStyles from './ModalContainer.styles';

export type ModalContainerProps = {
  isOpen: boolean;
  children: React.ReactNode;
} & Partial<{
  variant: 'center' | 'right';
}>;

const ModalContainer: FC<ModalContainerProps> = ({ isOpen, children, variant = 'center' }) => {
  const { classes, cx } = useStyles();

  if (!isOpen) return null;

  return <div className={cx(classes.root, classes[variant])}>{children}</div>;
};

export default ModalContainer;
