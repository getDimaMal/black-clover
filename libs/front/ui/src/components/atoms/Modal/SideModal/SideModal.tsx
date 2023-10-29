import React, { FC } from 'react';

import { Cross } from '../../../../assets/images';
import IconButton from '../../Buttons/IconButton/IconButton';
import ModalContainer from '../ModalContainer/ModalContainer';

import useStyles from './SideModal.styles';

export type SideModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const SideModal: FC<SideModalProps> = ({ isOpen, onClose, children }) => {
  const { classes } = useStyles();

  return (
    <ModalContainer isOpen={isOpen} variant="right" onClose={onClose}>
      <div className={classes.root}>
        <div className={classes.header}>
          <IconButton size="lg" icon={Cross} onClick={() => onClose()} />
        </div>

        {children}
      </div>
    </ModalContainer>
  );
};

export default SideModal;
