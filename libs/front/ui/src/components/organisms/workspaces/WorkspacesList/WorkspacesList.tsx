import React from 'react';

import { Add } from '../../../../assets/images';
import { useModalState } from '../../../../hooks/useModalState';
import Icon from '../../../atoms/Icon/Icon';
import Loader from '../../../atoms/Loader/Loader';
import ModalContainer from '../../../atoms/Modal/ModalContainer/ModalContainer';
import Paper from '../../../atoms/Paper/Paper';

import useStyles from './WorkspacesList.styles';

type ItemProps = Partial<{
  add: boolean;
  children: React.ReactNode;
  onClick: () => void;
}>;

type WorkspacesListComposition = {
  Item: (props: ItemProps) => JSX.Element;
};

export type WorkspacesListProps = {
  children: React.ReactNode;
  renderWorkspaceForm: (props: { handleClose: () => void }) => JSX.Element;
} & Partial<{
  isLoading: boolean;
}>;

type WorkspacesListWrapper = (props: WorkspacesListProps) => JSX.Element;

const WorkspacesList: WorkspacesListWrapper & WorkspacesListComposition = ({
  children,
  isLoading,
  renderWorkspaceForm,
}) => {
  const { classes } = useStyles();
  const { isOpen, open: openModal, close: closeModal } = useModalState();

  return (
    <div className={classes.root}>
      <Loader isLoading={Boolean(isLoading)} />

      <Item onClick={openModal}>
        <Icon size="lg" icon={Add} />
      </Item>

      {children}

      <ModalContainer isOpen={isOpen} onClose={closeModal}>
        <Paper>{renderWorkspaceForm({ handleClose: closeModal })}</Paper>
      </ModalContainer>
    </div>
  );
};

const Item = ({ children, onClick }: ItemProps) => {
  const { classes } = useStyles();

  return (
    <div onClick={() => onClick?.()}>
      <Paper className={classes.item}>{children}</Paper>
    </div>
  );
};

WorkspacesList.Item = Item;

export default WorkspacesList;
