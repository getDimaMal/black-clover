import React, { FC, useState } from 'react';

import useStyles from './TextField.styles';

export type InputTypes = 'text' | 'email' | 'password';

export type TextFieldProps = {
  name: string;
  value: null | string;
  label?: string;
  error?: string;
  type?: InputTypes;
  testId?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextField: FC<TextFieldProps> = ({
  name,
  label,
  error,
  testId,
  inputRef,
  onChange,
  value: initValue,
  type = 'text',
}) => {
  const { classes } = useStyles();
  const [value, setValue] = useState(initValue ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div>
      <label>
        {label && <div className={classes.label}>{label}</div>}
        <input ref={inputRef} type={type} name={name} value={value} onChange={handleChange} data-testid={testId} />
      </label>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default TextField;
