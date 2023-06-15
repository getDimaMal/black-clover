import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Button' })((theme) => ({
  root: {
    backgroundColor: theme.colors['bg-button-primary'],
  },
}));

export default useStyles;
