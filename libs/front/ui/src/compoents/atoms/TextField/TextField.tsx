import React, { FC } from 'react';

import useStyles from './TextField.styles';

export type Types = 'text' | 'email' | 'password';

export type TextFieldProps = {
  name: string;
  value: null | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Partial<{
  type: Types;
  label: string;
  testId: string;
  autoFocus: boolean;
  error: null | string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}>;

const TextField: FC<TextFieldProps> = ({ label, error, testId, value, type = 'text', ...other }) => {
  const { classes } = useStyles();

  return (
    <div>
      <label>
        {label && <div className={classes.label}>{label}</div>}
        <input {...other} value={value || ''} type={type} data-testid={testId} />
      </label>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default TextField;
