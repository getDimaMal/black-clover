import { makeStyles } from '../../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Filter' })((theme) => ({
  dropdown: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),

    borderRadius: '8px',
    border: `1px solid ${theme.colors['field/focused']}`,
    boxShadow: theme.shadows['shadow/2'],

    overflow: 'hidden',

    // minWidth: '150px',
  },
}));

export default useStyles;
