import React, { useRef } from 'react';

import { useClickOutside } from '../../../hooks/useClickOutside';

import useStyles from './Popover.styles';

export type PopoverProps = {
  isOpen: boolean;
  anchor: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

const Popover: React.FC<PopoverProps> = ({ isOpen, anchor, onClose, children, className }) => {
  const { classes, cx } = useStyles();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, onClose);

  return (
    <div ref={containerRef} className={cx(classes.root, className)}>
      {anchor}
      {isOpen && <div className={classes.popover}>{children}</div>}
    </div>
  );
};

export default Popover;
