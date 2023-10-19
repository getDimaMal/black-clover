import React, { FC, useEffect, useRef, useState } from 'react';

import { Cross, Search as SearchSVG } from '../../../../assets/images';
import IconButton from '../../Buttons/IconButton/IconButton';
import Icon from '../../Icon/Icon';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';

import useStyles from './Search.stiles';

export type SearchProps = {
  fullWidth?: boolean;
  onSearch?: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

const Search: FC<SearchProps> = ({ onSearch, fullWidth, suggestions }) => {
  const { classes, cx } = useStyles();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // ToDo Add debounce here
    onSearch?.(value);
  }, [onSearch, value]);

  const handleClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  const handleMenuItemClick = (label: string, subLabel: string) => {
    setIsOpen(false);
    setValue(`${label} ${subLabel}`);
  };

  const renderSearch = () => (
    <div className={cx(classes.root, { [classes.fullWidth]: Boolean(fullWidth) })}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        className={classes.field}
        onKeyDown={() => setIsOpen(true)}
        onChange={(event) => setValue(event.target.value)}
        ref={inputRef}
      />

      <div className={classes.icons}>
        <Icon size="sm" icon={SearchSVG} />
        {value && <IconButton size="sm" icon={Cross} onClick={() => handleClear()} className={classes.iconButton} />}
      </div>
    </div>
  );

  return (
    <Popover
      isOpen={isOpen}
      anchor={renderSearch()}
      className={cx({ [classes.fullWidth]: Boolean(fullWidth) })}
      onClose={() => setIsOpen(false)}
    >
      <div className={classes.dropdown}>
        <Menu>
          {suggestions.map((props, index) => (
            <Menu.MenuItem {...props} key={index} onClick={() => handleMenuItemClick(props.label, props.subLabel)} />
          ))}
        </Menu>
      </div>
    </Popover>
  );
};

export default Search;
