import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Clip' })((theme) => ({
  root: {
    display: 'inline-block',
    borderRadius: theme.borderRadius['clip-m'],
  },
}));

export default useStyles;
