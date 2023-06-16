import { makeStyles } from '../../../theme/makeStyles';

import { Colors } from './Typography';

type Props = {
  color: Colors;
};

const useStyles = makeStyles<Props, 'header' | 'body' | 'text'>({ name: 'Typography' })(
  (theme, { color }, classes) => ({
    root: {
      margin: 0,
      fontStile: 'normal',
      color: theme.colors[`text-${color}`],
    },

    header: {},
    h1: { [`&.${classes.header}`]: { ...theme.typography['headline1'] } },
    h2: { [`&.${classes.header}`]: { ...theme.typography['headline2'] } },
    h3: { [`&.${classes.header}`]: { ...theme.typography['headline3'] } },
    h4: { [`&.${classes.header}`]: { ...theme.typography['headline4'] } },
    h5: { [`&.${classes.header}`]: { ...theme.typography['headline5'] } },

    body: {},
    bodyM: { [`&.${classes.body}`]: { ...theme.typography['body-m'] } },
    bodyS: { [`&.${classes.body}`]: { ...theme.typography['body-s'] } },

    text: {},
    textL: { [`&.${classes.text}`]: { ...theme.typography['text-l'] } },
    textM: { [`&.${classes.text}`]: { ...theme.typography['text-m'] } },
    textS: { [`&.${classes.text}`]: { ...theme.typography['text-s'] } },

    inherit: {},
  })
);

export default useStyles;
