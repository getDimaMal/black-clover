import React, { FC, useRef } from 'react';

import { Cross, Search as SearchSVG } from '../../../../../assets/images';
import IconButton from '../../../Buttons/IconButton/IconButton';
import Icon from '../../../Icon/Icon';

import useStyles from './SearchField.styles';

export type SearchFieldProps = {
  value: string;
  fullWidth?: boolean;
  withFocus?: boolean;
  autoFocus?: boolean;
  onKeyDown?: () => void;
  onChange?: (value: string) => void;
};

const SearchField: FC<SearchFieldProps> = ({ value, fullWidth, withFocus, autoFocus, onChange, onKeyDown }) => {
  const { classes, cx } = useStyles();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    inputRef.current?.focus();
    onChange?.('');
  };

  return (
    <div className={cx(classes.root, { [classes.fullWidth]: Boolean(fullWidth) })}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        autoFocus={autoFocus}
        onKeyDown={() => onKeyDown?.()}
        onChange={(event) => onChange?.(event.target.value)}
        className={cx(classes.field, { [classes.focus]: Boolean(withFocus) })}
        ref={inputRef}
      />

      <div className={classes.icons}>
        <Icon size="sm" icon={SearchSVG} />
        {value && <IconButton size="sm" icon={Cross} onClick={handleClear} className={classes.iconButton} />}
      </div>
    </div>
  );
};

export default SearchField;
