import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles<void, 'header' | 'body' | 'text'>({ name: 'Typography' })((theme, _, classes) => ({
  root: {
    margin: 0,
    fontStile: 'normal',
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

  // primary: { color: theme.color['text-primary'] },
  // secondary: { color: theme.color['text-secondary'] },
}));

export default useStyles;
