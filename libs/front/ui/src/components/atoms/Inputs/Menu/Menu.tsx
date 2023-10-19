import React from 'react';

import Checkbox from '../Checkbox/Checkbox';

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

  const List = ({ children }: { children: React.ReactNode }) => (
    <li onClick={() => onClick?.()} className={cx(classes.listItem, { [classes.selected]: checked })}>
      {children}
    </li>
  );

  if (checkbox) {
    return (
      <List>
        <Checkbox label={label} checked={checked} onChange={() => onClick?.()} />
      </List>
    );
  }

  return (
    <List>
      {label}
      {subLabel && <span className={classes.subLabel}>{subLabel}</span>}
    </List>
  );
};

Menu.MenuItem = MenuItem;

export default Menu;
