import React from 'react';

import { useStyles } from './Link.styles';

export type Colors = 'main' | 'info';
export type Variants = 'textM';

export type LinkProps = {
  to: string;
  children: React.ReactNode;
} & Partial<{
  color: Colors;
  variant: Variants;
  className: string;
  testId: string;
}>;

const Link: React.FC<LinkProps> = ({ to, children, className, color = 'info' }) => {
  const { classes, cx } = useStyles({ color });

  return (
    <a href={to} className={cx(classes.root, className)}>
      {children}
    </a>
  );
};

export default Link;
