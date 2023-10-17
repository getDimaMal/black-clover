import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Logo' })((theme) => ({
  root: {
    ...theme.typography['body/xl'],
    color: theme.colors['bg/dark'],

    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 1,
  },

  logo: {
    width: '48px',
    height: '48px',
    display: 'inline-block',
    backgroundImage: theme.logo,
  },

  invert: {
    color: theme.colors['bg/light'],
  },
}));

export default useStyles;
