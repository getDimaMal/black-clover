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
  testId?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({
  label,
  testId,
  onClick,
  className,
  disabled,
  type = 'button',
  color = 'primary',
}) => {
  const { classes, cx } = useStyles({ color });

  return (
    <button
      type={type}
      disabled={disabled}
      className={cx(classes.root, className)}
      onClick={onClick}
      data-testid={testId}
    >
      {label}
    </button>
  );
};

export default Button;
