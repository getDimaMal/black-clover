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

          html: {
            width: '100%',
            height: '100%',

            overflow: 'hidden',
          },

          body: {
            width: '100%',
            height: '100%',

            margin: '0 !important',
            padding: '0 !important',

            overflow: 'scroll',

            color: theme.colors['text/black/1'],
            backgroundColor: theme.colors['bg/light'],
          },

          '#root': {
            width: '100%',
            minWidth: '900px',

            height: '100%',
            minHeight: '650px',

            flex: 1,
            display: 'inline-flex',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',

            overflow: 'scroll',
          },

          '#storybook-root': {
            padding: '1rem',
            border: '4px solid purple',

            width: '100%',
            minWidth: 'calc(2rem + 8px + 900px)',

            height: '100%',
            minHeight: 'calc(2rem + 8px + 650px)',

            flex: 1,
            display: 'inline-flex',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            gap: '24px',
          },
        }}
      />
    </Fragment>
  );
};

export default GlobalStyles;
