import React, { FC } from 'react';

import useStyles from './Checkbox.styles';

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange?: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange: handleChange }) => {
  const { classes } = useStyles();

  return (
    <label className={classes.root}>
      <input type="checkbox" checked={checked} onChange={() => handleChange?.()} className={classes.checkbox} />
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
