import React, { FC } from 'react';

import { useModalState } from '../../../../hooks/useModalState';
import Button from '../../../atoms/Buttons/Button/Button';
import SideModal from '../../../atoms/Modals/SideModal/SideModal';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './EventsHeader.styles';

export type CategoryHeaderProps = {
  name: string;
  Search: React.ReactNode;
  Filters: React.ReactNode;
  Modal: React.ReactNode;
};

const EventsHeader: FC<CategoryHeaderProps> = ({ name, Search, Filters, Modal }) => {
  const { classes, cx } = useStyles();
  const { isOpen, open: openModal, close: closeModal } = useModalState();

  return (
    <div className={classes.root}>
      <div className={cx(classes.row, classes.gap10)}>
        <Typography variant="h2">{name}</Typography>

        <div className={cx(classes.row, classes.gap5)}>
          <Button variant="contained" label="New Event" onClick={openModal} />
          <Button variant="outlined" label="New Category" onClick={openModal} />
        </div>
      </div>

      <div className={cx(classes.row, classes.gap4)}>
        <div className={classes.search}>{Search}</div>

        <div className={cx(classes.row, classes.gap4, classes.filters)}>{Filters}</div>
      </div>

      <SideModal isOpen={isOpen} onClose={closeModal}>
        {Modal}
      </SideModal>
    </div>
  );
};

export default EventsHeader;
