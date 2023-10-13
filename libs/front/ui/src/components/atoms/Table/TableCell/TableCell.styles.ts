import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableColumn' })(() => ({
  root: {
    '&:last-child': {
      borderRight: 'none',
    },
  },

  header: {},
}));

export default useStyles;
