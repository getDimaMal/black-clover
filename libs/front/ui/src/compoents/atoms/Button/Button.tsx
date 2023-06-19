import React, { FC } from 'react';

import useStyles from './Button.styles';

export type Color = 'primary' | 'secondary';

export type ButtonProps = {
  label: string;
  color?: Color;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ label, onClick, className, disabled, color = 'primary' }) => {
  const { classes, cx } = useStyles({ color });

  return (
    <button className={cx(classes.root, className)} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
