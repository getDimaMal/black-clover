import React, { forwardRef, useEffect, useState } from 'react';

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
  ({ name, error, success, disabled, autoFocus, onBlur, onChange, testId, value: initValue, type = 'text' }, ref) => {
    const { classes, cx } = useStyles();

    const [value, setValue] = useState(initValue ?? '');

    useEffect(() => {
      setValue(initValue ?? '');
    }, [initValue]);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      event.preventDefault();
      event.stopPropagation();

      onChange(event);
      onBlur?.(event);
    };

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        autoFocus={autoFocus}
        disabled={Boolean(disabled)}
        onBlur={handleBlur}
        onChange={(event) => setValue(event.target.value)}
        className={cx(classes.root, { [classes.error]: error, [classes.success]: success })}
        autoComplete="off"
        data-testid={testId}
      />
    );
  }
);

export default TextInput;
