import React, { FC } from 'react';

import Icon, { Sizes as IconSizes } from '../../Icon/Icon';

import useStyles from './IconButton.styles';

export type IconButtonProps = {
  icon: React.FunctionComponent;
  size?: IconSizes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const IconButton: FC<IconButtonProps> = ({ icon, size, onClick }) => {
  const { classes } = useStyles();

  return (
    <button className={classes.root} onClick={onClick}>
      <Icon icon={icon} size={size} />
    </button>
  );
};

export default IconButton;
