import { makeStyles } from '../../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Filter' })((theme) => ({
  dropdown: {
    maxWidth: 'fit-content',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),

    borderRadius: '8px',
    border: `1px solid ${theme.colors['field/focused']}`,
    boxShadow: theme.shadows['shadow/2'],
  },

  list: {
    maxHeight: '170px',
    overflowY: 'scroll',
  },
}));

export default useStyles;
