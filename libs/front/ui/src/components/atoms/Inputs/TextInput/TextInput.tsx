import React, { forwardRef } from 'react';

import { useStyles } from './TextInput.styles';

export type Types = 'text' | 'email' | 'password';

export type TextInputProps = {
  name: string;
  value: string | null;
  onChange: (value: string) => void;
} & Partial<{
  type: Types;
  error: boolean;
  success: boolean;
  disabled: boolean;
  autoFocus: boolean;
  testId: string;
}>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, error, success, disabled, autoFocus, onChange, testId, value, type = 'text' }, ref) => {
    const { classes, cx } = useStyles();

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value ?? ''}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        className={cx(classes.root, { [classes.error]: error, [classes.success]: success })}
        onChange={(event) => onChange(event.target.value)}
        data-testid={testId}
        autoComplete="off"
      />
    );
  }
);

export default TextInput;
