import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'CategoryHeader' })((theme) => ({
  root: {
    width: '100%',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(10),
  },

  buttonGroup: {
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(5),
  },
}));

export default useStyles;
