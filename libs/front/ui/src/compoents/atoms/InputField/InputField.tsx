import React, { FC, useState } from 'react';

import useStyles from './InputField.styles';

export type InputTypes = 'text' | 'email' | 'password';

export type InputFieldProps = {
  name: string;
  label?: string;
  value: null | string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  type?: InputTypes;
};

const InputField: FC<InputFieldProps> = ({ name, label, value: initValue, onChange, type = 'text' }) => {
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
        <input type={type} name={name} value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default InputField;
