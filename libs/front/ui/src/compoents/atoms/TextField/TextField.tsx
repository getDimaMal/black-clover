import React, { forwardRef } from 'react';

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

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, testId, value, type = 'text', ...other }, ref) => {
    const { classes } = useStyles();

    return (
      <div>
        <label>
          {label && <div className={classes.label}>{label}</div>}
          <input {...other} ref={ref} value={value || ''} type={type} data-testid={testId} />
        </label>
        {error && <div className={classes.error}>{error}</div>}
      </div>
    );
  }
);

export default TextField;
