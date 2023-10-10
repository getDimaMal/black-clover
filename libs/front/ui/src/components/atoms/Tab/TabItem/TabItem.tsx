import React, { FC } from 'react';

import { useStyles } from './TabItem.styles';

export type Tab = {
  id: number;
  label: string;
  isActive?: boolean;
};

export type TabItemProps = {
  onClick: (id: number) => void;
} & Tab;

const TabItem: FC<TabItemProps> = ({ id, label, isActive = false, onClick }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, { [classes.active]: isActive })} onClick={() => onClick(id)}>
      {label}
    </div>
  );
};

export default TabItem;
