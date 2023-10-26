import React, { forwardRef } from 'react';

import { useStyles } from './TextInput.styles';

export type Types = 'text' | 'email' | 'password';

export type TextInputProps = {
  name: string;
  value: string | number | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: Types;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  testId?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, error, success, disabled, autoFocus, onBlur, onChange, testId, value, type = 'text' }, ref) => {
    const { classes, cx } = useStyles();

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        autoComplete="off"
        value={value ?? ''}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        className={cx(classes.root, { [classes.error]: error, [classes.success]: success })}
        onBlur={onBlur}
        onChange={onChange}
        data-testid={testId}
      />
    );
  }
);

export default TextInput;
