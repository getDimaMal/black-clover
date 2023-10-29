import { FC, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Button from '../../Buttons/Button/Button';

import SideModal, { SideModalProps } from './SideModal';

export default {
  component: SideModal,
} as Meta<SideModalProps>;

type Story = StoryObj<SideModalProps>;

const SideModalHook: FC<SideModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Toggle Side Modal" onClick={() => setIsOpen((old) => !old)} />
      <SideModal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        This is a Side Modal
      </SideModal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <SideModalHook {...args} />,
};
