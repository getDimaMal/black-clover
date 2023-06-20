import React, { FC } from 'react';

import useStyles from './Button.styles';

export type Colors = 'primary' | 'secondary';

export type Types = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  label: string;
  color?: Colors;
  disabled?: boolean;
  className?: string;
  type?: Types;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ label, onClick, className, disabled, color = 'primary', type = 'button' }) => {
  const { classes, cx } = useStyles({ color });

  return (
    <button className={cx(classes.root, className)} type={type} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
