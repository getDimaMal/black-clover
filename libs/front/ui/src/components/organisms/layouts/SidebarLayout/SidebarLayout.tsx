import React, { FC } from 'react';

import Sidebar, { SidebarNavItems } from '../../../molecules/Sidebar/Sidebar';
import DesktopLayout from '../DesktopLayout/DesktopLayout';

import useStiles from './SidebarLayout.styles';

export type SidebarLayoutProps = {
  children: React.ReactNode;
  navigations: SidebarNavItems[];
  onNavigate: (path: string) => void;
  LogoutButton: React.ReactNode;
};

const SidebarLayout: FC<SidebarLayoutProps> = ({ children, navigations, onNavigate, LogoutButton }) => {
  const { classes } = useStiles();

  return (
    <DesktopLayout>
      <div className={classes.root}>
        <Sidebar Footer={LogoutButton}>
          {navigations.map((navigation, index) => (
            <Sidebar.Nav key={index} items={navigation} onNavigate={onNavigate} />
          ))}
        </Sidebar>

        <div className={classes.content}>{children}</div>
      </div>
    </DesktopLayout>
  );
};

export default SidebarLayout;
