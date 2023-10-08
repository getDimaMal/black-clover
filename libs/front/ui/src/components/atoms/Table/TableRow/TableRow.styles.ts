import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableRow' })((theme) => ({
  root: {
    th: {
      borderBottom: `1px solid ${theme.colors['divider-color']}`,
    },
    td: {
      borderBottom: `1px solid ${theme.colors['divider-color']}`,
    },

    '&:last-child': {
      td: {
        borderBottom: 'none',
      },
    },
  },
}));

export default useStyles;
