import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableColumn' })((theme) => ({
  root: {
    ...theme.typography['body-m'],

    color: theme.colors['text-primary'],
    padding: theme.spacings['spacing/8'],
    borderRight: `1px solid ${theme.colors['divider-color']}`,

    '&:last-child': {
      borderRight: 'none',
    },
  },

  header: {
    ...theme.typography['body-s'],
    backgroundColor: theme.colors['background'],
  },
}));

export default useStyles;
