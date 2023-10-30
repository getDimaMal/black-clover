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
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // ToDo Find a Better Approach
  const { clientWidth } = document.body;
  const anchorPosition = containerRef.current?.getBoundingClientRect().x || 0;
  const isRight = clientWidth <= 300 + anchorPosition;

  useClickOutside(containerRef, onClose);

  return (
    <div ref={containerRef} className={cx(classes.root, className)}>
      {anchor}
      {isOpen && (
        <div ref={popoverRef} className={cx(classes.popover, { [classes.rightAlign]: isRight })}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
