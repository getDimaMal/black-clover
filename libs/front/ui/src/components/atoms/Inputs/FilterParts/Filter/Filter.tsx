import React, { FC, useEffect, useState } from 'react';

import Popover from '../../../Popover/Popover';
import Menu from '../../Menu/Menu';
import FilterButton from '../FilterButton/FilterButton';

import useStyles from './Filter.styles';

type Option = {
  id: string;
  label: string;
};

export type FilterProps = {
  label: string;
  value: string[];
  options: Record<string, Option>;
  onChange: (id: string) => void;
};

const Filter: FC<FilterProps> = ({ label: baseLabel, value, options, onChange }) => {
  const { classes } = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [label, setLabel] = useState(baseLabel);

  useEffect(() => {
    setLabel(() => {
      if (value.length === 0) return baseLabel;
      else if (value.length <= 2) return value.map((id) => options[id].label).join(', ');
      else return `${baseLabel} (${value.length})`;
    });
  }, [baseLabel, options, value]);

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      anchor={<FilterButton label={label} onClick={() => setIsOpen((old) => !old)} isActive={Boolean(value.length)} />}
    >
      <div className={classes.dropdown}>
        <Menu>
          {Object.values(options).map(({ id, label }) => (
            <Menu.MenuItem checkbox key={id} label={label} checked={value.includes(id)} onClick={() => onChange(id)} />
          ))}
        </Menu>
      </div>
    </Popover>
  );
};

export default Filter;
