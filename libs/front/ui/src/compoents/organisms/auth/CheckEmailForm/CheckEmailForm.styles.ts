import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'CheckEmailForm' })((theme) => ({
  root: {
    position: 'relative',
  },

  error: {
    color: theme.colors['text-error'],
  },
}));

export default useStyles;
