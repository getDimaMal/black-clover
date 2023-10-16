import React, { FC } from 'react';

import { Logout } from '../../../../assets/images';
import Button from '../../../atoms/Buttons/Button/Button';
import Sidebar, { SidebarNavItems } from '../../../atoms/Sidebar/Sidebar';

import useStiles from './SidebarLayout.styles';

export type SidebarLayoutProps = {
  children: React.ReactNode;
  navigations: SidebarNavItems[];
  onNavigate: (path: string) => void;
};

const SidebarLayout: FC<SidebarLayoutProps> = ({ children, navigations, onNavigate }) => {
  const { classes } = useStiles();

  return (
    <div className={classes.root}>
      <Sidebar Footer={<Button label="Logout" variant="outlined" startIcon={Logout} />}>
        {navigations.map((navigation, index) => (
          <Sidebar.Nav key={index} items={navigation} onNavigate={onNavigate} />
        ))}
      </Sidebar>

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default SidebarLayout;
