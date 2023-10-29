import { FC, useEffect, useState } from 'react';
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

const ModalContainerHook: FC<ModalContainerProps> = ({ isOpen: open, ...props }) => {
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return <ModalContainer {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default: Story = {
  render: ({ variant, ...args }) => (
    <ModalContainerHook {...args} variant={variant}>
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
    </ModalContainerHook>
  ),
};
