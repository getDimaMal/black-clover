import React, { FC } from 'react';

import Icon from '../../Icon/Icon';

import useStyles from './Button.styles';

export type Types = 'button' | 'submit' | 'reset';
export type Variants = 'contained' | 'outlined' | 'ghost';

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  type?: Types;
  variant?: Variants;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  startIcon?: React.FunctionComponent;
  endIcon?: React.FunctionComponent;
};

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  startIcon,
  endIcon,
  fullWidth,
  type = 'button',
  variant = 'contained',
}) => {
  const { classes, cx } = useStyles();

  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(classes.root, classes[variant], { [classes.fullWidth]: Boolean(fullWidth) })}
      onClick={onClick}
    >
      {startIcon && <Icon icon={startIcon} />}

      {label}

      {endIcon && <Icon icon={endIcon} />}
    </button>
  );
};

export default Button;
