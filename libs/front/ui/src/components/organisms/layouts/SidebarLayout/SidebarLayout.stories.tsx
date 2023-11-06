import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Logout, Map, Setting } from '../../../../assets/images';
import Button from '../../../atoms/Buttons/Button/Button';

import SidebarLayout, { SidebarLayoutProps } from './SidebarLayout';

type SidebarLayoutWithHeightProps = SidebarLayoutProps & { height: number };

export default {
  component: SidebarLayout,
  args: {
    height: 500,
    LogoutButton: <Button label="Logout" variant="outlined" startIcon={Logout} />,
    navigations: [
      [
        {
          icon: Map,
          variant: 'head',
          label: 'Tracking Plan',
          isActive: (path) => ['/events', '/properties', '/categories', '/groups', '/tags'].includes(String(path)),
        },
        { path: '/categories', label: 'Categories', variant: 'item' },
        { path: '/properties', label: 'Properties', variant: 'item' },
        { path: '/groups', label: 'Groups', variant: 'item' },
        { path: '/events', label: 'Events', variant: 'item' },
        { path: '/tags', label: 'Tags', variant: 'item' },
      ],
      [
        {
          icon: Setting,
          variant: 'head',
          label: 'Settings',
          isActive: (path) => ['/workspace', '/billing', '/import', '/export', '/switch'].includes(String(path)),
        },
        { path: '/workspace', label: 'Workspace Settings', variant: 'item' },
        { path: '/switch', label: 'Switch Workspace', variant: 'item' },
        { path: '/billing', label: 'Billing', variant: 'item' },
        { path: '/import', label: 'Import', variant: 'item' },
        { path: '/export', label: 'Export', variant: 'item' },
      ],
    ],
  },
  argTypes: {
    navigations: { control: false },
    LogoutButton: { control: false },
  },
} as Meta<SidebarLayoutWithHeightProps>;

type Story = StoryObj<SidebarLayoutWithHeightProps>;

export const Default: Story = {
  render: ({ height, ...args }) => (
    <SidebarLayout {...args}>
      <div
        style={{
          height,
          flex: 1,
          padding: '30px',

          fontSize: '50px',
          textAlign: 'center',

          borderRadius: '24px',
          backgroundColor: '#FAFAFF',
          boxShadow: '0px 4px 8px 0px rgba(3, 4, 44, 0.08)',
        }}
      >
        Content with height: {height}px
      </div>
    </SidebarLayout>
  ),
};
