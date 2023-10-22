import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'SignInForm' })((theme) => ({
  alignCenter: {
    textAlign: 'center',
    userSelect: 'none',
  },

  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'stretch',
    gap: theme.spacing(4),

    button: {
      flex: 1,
      justifyContent: 'center',
    },
  },
}));

export default useStyles;
