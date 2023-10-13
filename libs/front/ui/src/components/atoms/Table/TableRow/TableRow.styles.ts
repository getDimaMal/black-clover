import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableRow' })(() => ({
  root: {
    th: {},
    td: {},

    '&:last-child': {
      td: {
        borderBottom: 'none',
      },
    },
  },
}));

export default useStyles;
