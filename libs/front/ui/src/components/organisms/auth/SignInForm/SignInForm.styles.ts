import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'SignInForm' })((theme) => ({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'stretch',
    gap: theme.spacing(4),
  },
}));

export default useStyles;
