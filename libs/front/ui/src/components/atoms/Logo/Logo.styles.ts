import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Logo' })((theme) => ({
  root: {
    ...theme.typography['body/xl'],
    color: theme.colors['bg/dark'],

    display: 'flex',
  },

  container: {
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  logo: {
    ...theme.logo,
  },

  invert: {
    color: theme.colors['bg/light'],
  },
}));

export default useStyles;
