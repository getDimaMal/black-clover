import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableContainer' })((theme) => ({
  root: {
    borderRadius: theme.borderRadius['radius/8'],

    overflow: 'hidden',
  },

  header: {
    padding: theme.spacings['spacing/8'],

    display: 'flex',
    justifyContent: 'space-between',
  },

  block: {
    marginTop: theme.spacings['spacing/4'],
  },

  label: {},

  subLabel: {},

  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderWidth: '1px 0px',
  },

  footer: {
    height: theme.spacings['spacing/20'],
  },
}));

export default useStyles;
