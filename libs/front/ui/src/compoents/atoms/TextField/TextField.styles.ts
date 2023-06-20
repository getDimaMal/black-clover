import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TextField' })((theme) => ({
  label: {
    ...theme.typography['text-l'],
  },

  error: {
    ...theme.typography['text-s'],
    color: theme.colors['text-error'],
  },
}));

export default useStyles;
