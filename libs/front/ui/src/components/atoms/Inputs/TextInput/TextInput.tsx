import React, { forwardRef, useState } from 'react';

import { useStyles } from './TextInput.styles';

export type Types = 'text' | 'email' | 'password';

export type TextInputProps = {
  name: string;
  value: string | null;
  onChange: (name: string, value: string) => void;
} & Partial<{
  type: Types;
  error: boolean;
  success: boolean;
  disabled: boolean;
  autoFocus: boolean;
  testId: string;
}>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, error, success, disabled, autoFocus, onChange, testId, value: initValue, type = 'text' }, ref) => {
    const { classes, cx } = useStyles();
    const [value, setValue] = useState(initValue ?? '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      event.stopPropagation();

      setValue(event.target.value);
      onChange(event.target.name, event.target.value);
    };

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        className={cx(classes.root, { [classes.error]: error, [classes.success]: success })}
        onChange={handleChange}
        data-testid={testId}
        autoComplete="off"
      />
    );
  }
);

export default TextInput;
