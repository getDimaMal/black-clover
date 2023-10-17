import React, { FC } from 'react';

import useStyles from './Logo.styles';

export type LogoProps = {
  invert?: boolean;
  onlyImage?: boolean;
};

const Logo: FC<LogoProps> = ({ invert, onlyImage }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, { [classes.invert]: invert })}>
      <div className={classes.logo} />
      {!onlyImage && <div>EVENT PANEL</div>}
    </div>
  );
};

export default Logo;
