import React, { FC, useEffect, useState } from 'react';

import { useStyles } from './TextInput.styles';

export type Types = 'text' | 'email' | 'password';

export type TextInputProps = {
  name: string;
  value: string | number | null;
  type?: Types;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  testId?: string;
};

const TextInput: FC<TextInputProps> = ({
  name,
  onChange,
  disabled,
  error,
  success,
  testId,
  value: initValue,
  type = 'text',
}) => {
  const { classes, cx } = useStyles();
  const [value, setValue] = useState(String(initValue ?? ''));

  useEffect(() => {
    setValue(String(initValue ?? ''));
  }, [initValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setValue(event.target.value);
    onChange?.(event);
  };

  return (
    <input
      type={type}
      name={name}
      value={value}
      className={cx(classes.root, { [classes.error]: error, [classes.success]: success })}
      disabled={Boolean(disabled)}
      onChange={handleChange}
      autoComplete="off"
      data-testid={testId}
    />
  );
};

export default TextInput;
