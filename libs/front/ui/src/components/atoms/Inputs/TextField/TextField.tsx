import React, { FC, useState } from 'react';

import { Eye, EyeSlash } from '../../../../assets/images';
import IconButton from '../../Buttons/IconButton/IconButton';
import TextInput, { Types } from '../TextInput/TextInput';

import useStyles from './TextField.styles';

export type TextFieldProps = {
  name: string;
  value: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: Types;
  label?: string;
  autoFocus?: boolean;
  errorMessage?: string | null;
  successMessage?: string | null;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const TextField: FC<TextFieldProps> = ({ label, errorMessage, successMessage, type: initType, ...other }) => {
  const { classes, cx } = useStyles();
  const [type, setType] = useState<Types>(initType || 'text');

  return (
    <div className={classes.root}>
      <label className={classes.inputContainer}>
        {label && <div className={classes.label}>{label}</div>}
        <TextInput {...other} type={type} error={Boolean(errorMessage)} success={Boolean(successMessage)} />
      </label>

      {initType === 'password' ? (
        <div className={classes.buttonContainer}>
          <IconButton
            icon={type === 'text' ? EyeSlash : Eye}
            onClick={() => setType((old) => (old === 'text' ? 'password' : 'text'))}
          />
        </div>
      ) : null}

      {errorMessage && <span className={cx(classes.message, classes.error)}>{errorMessage}</span>}
      {successMessage && <span className={cx(classes.message, classes.success)}>{successMessage}</span>}
    </div>
  );
};

export default TextField;
