import React, { FC, useState } from 'react';

import { Cross, Search as SearchSVG } from '../../../../assets/images';
import IconButton from '../../Buttons/IconButton/IconButton';
import Icon from '../../Icon/Icon';

import useStyles from './Search.stiles';

export type SearchProps = {
  fullWidth?: boolean;
  onSearch?: (value: string) => void;
};

const Search: FC<SearchProps> = ({ onSearch, fullWidth }) => {
  const { classes, cx } = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const { value } = event.target;
    setValue(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setValue('');
    onSearch?.('');
  };

  return (
    <div className={cx(classes.root, { [classes.fullWidth]: Boolean(fullWidth) })}>
      <input type="text" value={value} onChange={handleChange} className={classes.field} placeholder="Search" />

      <div className={classes.icons}>
        <Icon size="sm" icon={SearchSVG} />
        <IconButton size="sm" icon={Cross} onClick={handleClear} className={classes.iconButton} />
      </div>
    </div>
  );
};

export default Search;
