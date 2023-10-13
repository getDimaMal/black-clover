import React, { FC } from 'react';

import useStyles from './Button.styles';

export type Types = 'button' | 'submit' | 'reset';
export type Variants = 'contained' | 'outlined' | 'ghost';

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  type?: Types;
  variant?: Variants;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ label, onClick, disabled, type = 'button', variant = 'contained' }) => {
  const { classes, cx } = useStyles();

  return (
    <button type={type} disabled={disabled} className={cx(classes.root, classes[variant])} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
