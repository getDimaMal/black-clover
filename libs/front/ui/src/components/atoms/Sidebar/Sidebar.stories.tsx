import { Meta, StoryObj } from '@storybook/react';

import { Logout, Map, Setting } from '../../../assets/images';
import Button from '../Buttons/Button/Button';

import Sidebar, { SidebarProps } from './Sidebar';

export default {
  component: Sidebar,
  args: {
    Footer: <Button label="Logout" variant="outlined" startIcon={Logout} />,
  },
  argTypes: {
    Footer: { control: false },
  },
} as Meta<SidebarProps>;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Sidebar.Nav
        items={[
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
        ]}
      />

      <Sidebar.Nav
        items={[
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
        ]}
      />
    </Sidebar>
  ),
};
