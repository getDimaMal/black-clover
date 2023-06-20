import React, { FC, useState } from 'react';

import useStyles from './TextField.styles';

export type InputTypes = 'text' | 'email' | 'password';

export type TextFieldProps = {
  name: string;
  label?: string;
  value: null | string;
  type?: InputTypes;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextField: FC<TextFieldProps> = ({ name, label, inputRef, onChange, value: initValue, type = 'text' }) => {
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
        <input ref={inputRef} type={type} name={name} value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default TextField;
