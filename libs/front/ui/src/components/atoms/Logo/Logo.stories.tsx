import { Meta, StoryObj } from '@storybook/react';

import Logo, { LogoProps } from './Logo';

export default {
  component: Logo,
  args: {
    onlyImage: false,
  },
  argTypes: {
    invert: { control: false },
  },
} as Meta<LogoProps>;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ padding: '8px 0', backgroundColor: '#001054' }}>
        <Logo {...args} invert />
      </div>

      <Logo {...args} />
    </div>
  ),
};
