import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'LoginForm' })((theme) => ({
  root: {
    width: '100%',
    maxWidth: '300px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(4),
  },

  alignCenter: {
    textAlign: 'center',
    userSelect: 'none',
  },

  alert: {
    height: '54px',
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
