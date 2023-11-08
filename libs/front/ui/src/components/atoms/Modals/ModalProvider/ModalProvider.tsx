import React, { createContext, FC, useContext, useState } from 'react';

import Modal from '../Modal/Modal';
import SideModal from '../SideModal/SideModal';

type ModalVariants = 'right' | 'center';

type ModalContextType = {
  openModal: (modal: React.ReactNode) => void;
  openSideModal: (modal: React.ReactNode) => void;

  close: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) throw new Error('useModal must be used within a ModalProvider');

  return context;
}

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<React.ReactNode | null>(null);
  const [variant, setVariant] = useState<ModalVariants | null>(null);

  const openModal = (modal: React.ReactNode) => {
    setVariant('center');
    setModal(modal);
    setIsOpen(true);
  };

  const openSideModal = (modal: React.ReactNode) => {
    setVariant('right');
    setModal(modal);
    setIsOpen(true);
  };

  const handleClose = () => {
    setVariant(null);
    setModal(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, openSideModal, close: handleClose }}>
      {children}

      <Modal isOpen={isOpen && variant === 'center'} onClose={() => handleClose()}>
        {modal}
      </Modal>

      <SideModal isOpen={isOpen && variant === 'right'} onClose={() => handleClose()}>
        {modal}
      </SideModal>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
