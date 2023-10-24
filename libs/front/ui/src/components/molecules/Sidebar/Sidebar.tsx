import React from 'react';

import Icon from '../../atoms/Icon/Icon';
import Logo from '../../atoms/Logo/Logo';

import useStiles from './Sidebar.styles';
import SidebarProvider, { useSidebar } from './SidebarContext';

type SidebarNavCommonProps = {
  label: string;
};

type SideBarNavHeadProps = {
  variant: 'head';
  icon: React.FunctionComponent;
  isActive: (path: string | null) => boolean;
  path?: never;
};

type SideBarNavItemProps = {
  path: string;
  variant: 'item';
  icon?: never;
  isActive?: never;
};

export type SidebarNavItems = Array<SidebarNavCommonProps & (SideBarNavHeadProps | SideBarNavItemProps)>;

type SidebarNavProps = {
  items: SidebarNavItems;
  onNavigate?: (path: string) => void;
};

type SidebarComposition = {
  Nav: (props: SidebarNavProps) => JSX.Element;
};

export type SidebarProps = {
  children: JSX.Element | JSX.Element[];
  Footer: JSX.Element;
};

type SidebarWrapper = (props: SidebarProps) => JSX.Element;

const Sidebar: SidebarWrapper & SidebarComposition = ({ children, Footer }) => {
  const { classes } = useStiles();

  return (
    <SidebarProvider>
      <div className={classes.root}>
        <Logo invert />

        <nav className={classes.navigation}>{children}</nav>

        <div>{Footer}</div>
      </div>
    </SidebarProvider>
  );
};

const Nav = ({ items, onNavigate }: SidebarNavProps) => {
  const { classes, cx } = useStiles();
  const { currentPage, setCurrentPage } = useSidebar();

  const handleClick = (variant: string, path?: string) => () => {
    if (variant === 'item' && path) {
      setCurrentPage(path);
      onNavigate?.(path);
    }
  };

  return (
    <ul className={classes.list}>
      {items.map(({ path, label, variant, icon, isActive }, index) => (
        <div
          key={index}
          onClick={handleClick(variant, path)}
          className={cx(classes[variant], {
            [classes.active]: variant === 'head' ? isActive(currentPage) : currentPage === path,
          })}
        >
          {icon && <Icon icon={icon} />}
          <span>{label}</span>
        </div>
      ))}
    </ul>
  );
};

Sidebar.Nav = Nav;

export default Sidebar;
