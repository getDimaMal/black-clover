import React, { FC, useEffect, useRef } from 'react';

import useStyles from './ModalContainer.styles';

export type ModalContainerProps = {
  isOpen: boolean;
  children: React.ReactNode;
} & Partial<{
  variant: 'center' | 'right';
  onClose: () => void;
}>;

const ModalContainer: FC<ModalContainerProps> = ({ isOpen, children, onClose, variant = 'center' }) => {
  const { classes, cx } = useStyles();
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current === event.target) {
        onClose?.();
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClose, ref]);

  if (!isOpen) return null;

  return (
    <div ref={ref} className={cx(classes.root, classes[variant])}>
      {children}
    </div>
  );
};

export default ModalContainer;
