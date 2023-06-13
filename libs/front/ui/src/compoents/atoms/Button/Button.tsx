import React, { FC } from 'react';

import useStyles from './Button.styles';

export type ButtonProps = {
  label: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  const { classes } = useStyles();

  return (
    <button className={classes.root} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
