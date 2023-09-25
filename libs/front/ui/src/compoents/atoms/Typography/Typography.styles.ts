import { makeStyles } from '../../../theme/makeStyles';


const useStyles = makeStyles({ name: 'Typography' })((theme) => ({
  root: {
    margin: 0,
    fontStile: 'normal',
  },

  main: { color: theme.colors['text-main'] },
  primary: { color: theme.colors['text-primary'] },
  secondary: { color: theme.colors['text-secondary'] },

  h1: { ...theme.typography['headline1'] },
  h2: { ...theme.typography['headline2'] },
  h3: { ...theme.typography['headline3'] },
  h4: { ...theme.typography['headline4'] },
  h5: { ...theme.typography['headline5'] },

  bodyM: { ...theme.typography['body-m'] },

  textM: { ...theme.typography['text-m'] },

  inherit: {},
}));

export default useStyles;
