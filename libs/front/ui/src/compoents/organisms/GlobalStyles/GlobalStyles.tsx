import React, { Fragment } from 'react';
import { GlobalStyles as TssGlobalStyles } from 'tss-react';

import { useStyles } from '../../../theme/makeStyles';

const GlobalStyles = () => {
  const { theme } = useStyles();

  const addFontFaces = () => {
    return theme?.fontFaces.map((fontFace, key) => <TssGlobalStyles key={key} styles={{ '@font-face': fontFace }} />);
  };

  return (
    <Fragment>
      {addFontFaces()}
      <TssGlobalStyles styles={{ '*': { ...theme.typography['body-m'] } }} />
    </Fragment>
  );
};

export default GlobalStyles;
