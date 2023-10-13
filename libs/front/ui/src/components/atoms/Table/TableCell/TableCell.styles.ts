import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableColumn' })((theme) => ({
  root: {
    padding: theme.spacings['spacing/8'],

    '&:last-child': {
      borderRight: 'none',
    },
  },

  header: {},
}));

export default useStyles;
