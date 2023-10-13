import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableColumn' })((theme) => ({
  root: {
    ...theme.typography['body-m'],

    padding: theme.spacings['spacing/8'],

    '&:last-child': {
      borderRight: 'none',
    },
  },

  header: {
    ...theme.typography['body-s'],
  },
}));

export default useStyles;
