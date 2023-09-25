import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TextField' })((theme) => ({
  label: {
    ...theme.typography['text-m'],
  },

  error: {
    ...theme.typography['text-m'],
    color: theme.colors['text-error'],
  },
}));

export default useStyles;
