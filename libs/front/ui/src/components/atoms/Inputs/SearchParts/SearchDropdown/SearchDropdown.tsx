import React, { FC, useState } from 'react';

import Popover from '../../../Popover/Popover';
import Menu from '../../Menu/Menu';
import SearchField from '../SearchField/SearchField';

import useStyles from './SearchDropdown.styles';

export type SearchDropdownProps = {
  value: string;
  onSearch: (value: string) => void;
  suggestions: { label: string; subLabel: string }[];
};

const SearchDropdown: FC<SearchDropdownProps> = ({ value, onSearch, suggestions }) => {
  const { classes } = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (label: string, subLabel: string) => {
    setIsOpen(false);
    onSearch(`${label} ${subLabel}`);
  };

  return (
    <Popover
      isOpen={isOpen}
      className={classes.root}
      onClose={() => setIsOpen(false)}
      anchor={<SearchField fullWidth withFocus value={value} onChange={onSearch} onKeyDown={() => setIsOpen(true)} />}
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
