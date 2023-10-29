import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Table' })((theme) => ({
  root: {
    ...theme.typography['body/xs'],

    width: '100%',

    borderRadius: '16px',
    border: `1px solid ${theme.colors['bg/blue/1']}`,
    backgroundColor: theme.colors['bg/light'],

    overflow: 'hidden',
  },

  header: {
    width: '100%',
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,

    display: 'inline-flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  table: {
    width: '100%',

    borderCollapse: 'collapse',
    borderTop: `1px solid ${theme.colors['bg/blue/1']}`,
    borderBottom: `1px solid ${theme.colors['bg/blue/1']}`,
  },

  tableRow: {
    th: {},
    td: {},

    '&:last-child': {
      td: {
        borderBottom: 'none',
      },
    },
  },

  tableCell: {
    textAlign: 'left',

    border: `1px solid ${theme.colors['bg/blue/1']}`,
    padding: `${theme.spacing(2)} ${theme.spacing(2)}`,

    '&:last-child': {
      borderRight: 'none',
    },
  },

  footer: {
    height: theme.spacing(5),
    backgroundColor: theme.colors['bg/grey/2'],
  },
}));

export default useStyles;
