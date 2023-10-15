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
      <TssGlobalStyles
        styles={{
          '*': {
            ...theme.typography['body/m'],

            boxSizing: 'border-box',
          },

          body: {
            width: '100vw',
            minWidth: '900px',
            maxWidth: '100vw',

            height: '100vh',
            minHeight: '700px',
            maxHeight: '100vh',

            margin: '0 !important',
            padding: '0 !important',

            color: theme.colors['text/black/1'],
            backgroundColor: theme.colors['bg/light'],
          },

          '#root ': {
            width: '100%',
            height: '100%',

            display: 'inline-flex',
          },

          '#storybook-root ': {
            width: '100%',
            height: '100%',

            display: 'inline-flex',

            padding: '1rem',
          },
        }}
      />
    </Fragment>
  );
};

export default GlobalStyles;
