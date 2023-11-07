import React, { FC } from 'react';

import { Cross } from '../../../../assets/images';
import IconButton from '../../Buttons/IconButton/IconButton';
import Modal from '../Modal/Modal';

import useStyles from './SideModal.styles';

export type SideModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const SideModal: FC<SideModalProps> = ({ isOpen, onClose, children }) => {
  const { classes } = useStyles();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classes.root}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <IconButton size="lg" icon={Cross} onClick={() => onClose()} />
        </div>

        {children}
      </div>
    </Modal>
  );
};

export default SideModal;
