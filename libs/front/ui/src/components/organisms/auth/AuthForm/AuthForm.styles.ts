import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'AuthForm' })((theme) => ({
  root: {
    width: '100%',
    maxWidth: '300px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(8),
  },

  alert: {
    height: '46px',
  },
}));

export default useStyles;
