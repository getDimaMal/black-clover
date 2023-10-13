import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableContainer' })((theme) => ({
  root: {
    borderRadius: theme.borderRadius['radius/8'],

    overflow: 'hidden',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  block: {},

  label: {},

  subLabel: {},

  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderWidth: '1px 0px',
  },

  footer: {},
}));

export default useStyles;
