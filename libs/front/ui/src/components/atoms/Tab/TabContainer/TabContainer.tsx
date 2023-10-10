import React, { FC } from 'react';

import TabItem, { Tab } from '../TabItem/TabItem';

import { useStyles } from './TabContainer.styles';

export type TabContainerProps = {
  tabs: Tab[];
  onClick: (id: number) => void;
};

const TabContainer: FC<TabContainerProps> = ({ tabs, onClick }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      {tabs.map((tab) => (
        <TabItem key={tab.id} id={tab.id} label={tab.label} isActive={tab.isActive} onClick={onClick} />
      ))}
    </div>
  );
};

export default TabContainer;
