import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'LoginFormUI' })((theme) => ({
  root: {
    width: 'fit-content',
    position: 'relative',
  },
  error: {
    color: theme.colors['text-error'],
  },
}));

export default useStyles;
