import React from 'react';

import useStyles from './Popover.styles';

export type PopoverProps = {
  isOpen: boolean;
  anchor: React.ReactNode;
  children: React.ReactNode;
};

const Popover: React.FC<PopoverProps> = ({ isOpen, anchor, children }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root)}>
      {anchor}
      <div className={cx(classes.dropdown, { [classes.closed]: !isOpen })}>{children}</div>
    </div>
  );
};

export default Popover;
