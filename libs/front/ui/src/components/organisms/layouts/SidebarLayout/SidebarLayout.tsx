import React, { FC } from 'react';

import { Logout } from '../../../../assets/images';
import Button from '../../../atoms/Buttons/Button/Button';
import Sidebar, { SidebarNavItems } from '../../../molecules/Sidebar/Sidebar';
import DesktopLayout from '../DesktopLayout/DesktopLayout';

import useStiles from './SidebarLayout.styles';

export type SidebarLayoutProps = {
  children: React.ReactNode;
  navigations: SidebarNavItems[];
  onNavigate: (path: string) => void;
};

const SidebarLayout: FC<SidebarLayoutProps> = ({ children, navigations, onNavigate }) => {
  const { classes } = useStiles();

  return (
    <DesktopLayout>
      <div className={classes.root}>
        <Sidebar Footer={<Button label="Logout" variant="outlined" startIcon={Logout} />}>
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
