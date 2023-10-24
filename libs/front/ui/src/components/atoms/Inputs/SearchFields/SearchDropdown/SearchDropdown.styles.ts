import { makeStyles } from '../../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Search' })((theme) => ({
  root: {
    width: '100%',
  },

  dropdown: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),

    borderRadius: '8px',
    border: `1px solid ${theme.colors['field/focused']}`,
    boxShadow: theme.shadows['shadow/2'],

    overflow: 'hidden',
  },
}));

export default useStyles;
