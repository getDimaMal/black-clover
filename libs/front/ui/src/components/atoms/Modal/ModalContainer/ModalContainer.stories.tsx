import { Meta, StoryObj } from '@storybook/react';

import ModalContainer, { ModalContainerProps } from './ModalContainer';

export default {
  component: ModalContainer,
  args: {
    isOpen: true,
    variant: 'center',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    variant: { control: 'radio', options: ['center', 'right'] },
  },
} as Meta<ModalContainerProps>;

type Story = StoryObj<ModalContainerProps>;

export const Default: Story = {
  render: ({ variant, ...args }) => (
    <ModalContainer {...args} variant={variant}>
      <div
        style={{
          minWidth: '400px',
          height: '300px',
          padding: '24px',
          flex: variant === 'right' ? 1 : 0,
          backgroundColor: '#FFFFFF',
        }}
      >
        Modal
      </div>
    </ModalContainer>
  ),
};
