import React, { FC, useState } from 'react';

import { Eye, EyeSlash } from '../../../../assets/images';
import IconButton from '../../Buttons/IconButton/IconButton';
import TextInput, { Types } from '../TextInput/TextInput';

import useStyles from './TextField.styles';

export type TextFieldProps = {
  name: string;
  value: string | null;
  onChange: (value: string) => void;
} & Partial<{
  type: Types;
  label: string;
  autoFocus: boolean;
  error: string | null;
  success: string | null;
}>;

const TextField: FC<TextFieldProps> = ({ label, error, success, type: initType = 'text', ...other }) => {
  const { classes, cx } = useStyles();
  const [type, setType] = useState<Types>(initType);

  return (
    <div className={classes.root}>
      <label className={classes.inputContainer}>
        {label && <div className={classes.label}>{label}</div>}
        <TextInput {...other} type={type} error={Boolean(error)} success={Boolean(success)} />
      </label>

      {initType === 'password' ? (
        <div className={classes.buttonContainer}>
          <IconButton
            icon={type === 'text' ? EyeSlash : Eye}
            onClick={() => setType((old) => (old === 'text' ? 'password' : 'text'))}
          />
        </div>
      ) : null}

      {error && <span className={cx(classes.message, classes.error)}>{error}</span>}
      {success && <span className={cx(classes.message, classes.success)}>{success}</span>}
    </div>
  );
};

export default TextField;
