import React, { FC, useEffect, useState } from 'react';

import Popover from '../../../Popover/Popover';
import Menu from '../../Menu/Menu';
import Search from '../Search/Search';

import useStyles from './SearchDropdown.styles';

export type SearchProps = {
  onSearch?: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

const SearchDropdown: FC<SearchProps> = ({ onSearch, suggestions }) => {
  const { classes } = useStyles();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ToDo Add debounce here
    onSearch?.(value);
  }, [onSearch, value]);

  const handleMenuItemClick = (label: string, subLabel: string) => {
    setIsOpen(false);
    setValue(`${label} ${subLabel}`);
  };

  return (
    <Popover
      isOpen={isOpen}
      className={classes.root}
      onClose={() => setIsOpen(false)}
      anchor={<Search fullWidth withFocus value={value} onChange={setValue} onKeyDown={() => setIsOpen(true)} />}
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

export default SearchDropdown;
