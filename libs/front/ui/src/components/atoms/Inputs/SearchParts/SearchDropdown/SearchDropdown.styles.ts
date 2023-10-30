import { makeStyles } from '../../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Search' })((theme) => ({
  root: {
    width: '100%',
  },

  dropdown: {
    width: '100%',

    padding: theme.spacing(1),
    marginTop: theme.spacing(2),

    borderRadius: '8px',
    border: `1px solid ${theme.colors['field/focused']}`,
    backgroundColor: theme.colors['bg/light'],
    boxShadow: theme.shadows['shadow/2'],

    overflow: 'hidden',
  },
}));

export default useStyles;
