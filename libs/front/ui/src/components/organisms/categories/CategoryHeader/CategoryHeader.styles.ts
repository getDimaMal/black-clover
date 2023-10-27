import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'CategoryHeader' })((theme) => ({
  root: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(5),
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  search: {
    flex: 1,
  },

  filters: {
    flex: 2,
  },

  gap4: {
    gap: theme.spacing(4),
  },

  gap5: {
    gap: theme.spacing(5),
  },

  gap10: {
    gap: theme.spacing(10),
  },
}));

export default useStyles;
