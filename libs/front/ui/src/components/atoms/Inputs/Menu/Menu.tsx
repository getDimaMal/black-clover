import React from 'react';

import { CheckboxOff, CheckboxOn } from '../../../../assets/images';
import Icon from '../../Icon/Icon';
import Typography from '../../Typography/Typography';

import useStyles from './Menu.styles';

export type MenuItemProps = {
  label: string;
  subLabel?: string;
  checked?: boolean;
  onClick?: () => void;
  checkbox?: boolean;
};

type MenuComposition = {
  MenuItem: (props: MenuItemProps) => JSX.Element;
};

export type MenuProps = {
  children: JSX.Element | JSX.Element[];
};

type MenuWrapper = (props: MenuProps) => JSX.Element;

const Menu: MenuWrapper & MenuComposition = ({ children }) => {
  const { classes } = useStyles();

  return <ul className={classes.root}>{children}</ul>;
};

const MenuItem = ({ label, subLabel, checkbox, onClick, checked = false }: MenuItemProps) => {
  const { classes, cx } = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onClick?.();
  };

  const renderCheckbox = () => {
    if (!checkbox) return null;

    return checked ? (
      <Icon icon={CheckboxOn} className={classes.checkboxOn} />
    ) : (
      <Icon icon={CheckboxOff} className={classes.checkboxOff} />
    );
  };

  return (
    <li onClick={handleClick} className={cx(classes.listItem, { [classes.selected]: checked })}>
      {renderCheckbox()}

      <Typography variant="bodyXS">
        {label}
        {subLabel && (
          <Typography variant="inherit" className={classes.subLabel}>
            {subLabel}
          </Typography>
        )}
      </Typography>
    </li>
  );
};

Menu.MenuItem = MenuItem;

export default Menu;
