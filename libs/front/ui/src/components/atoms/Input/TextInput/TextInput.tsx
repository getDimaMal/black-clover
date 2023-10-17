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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      event.stopPropagation();

      onChange(event);
    };

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value ?? ''}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        className={cx(classes.root, { [classes.error]: error, [classes.success]: success })}
        onBlur={onBlur}
        onChange={handleChange}
        autoComplete="off"
        data-testid={testId}
      />
    );
  }
);

export default TextInput;
