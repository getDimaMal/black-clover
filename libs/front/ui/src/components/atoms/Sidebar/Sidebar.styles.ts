import { makeStyles } from '../../../theme/makeStyles';

const useStiles = makeStyles({ name: 'Sidebar' })((theme) => ({
  root: {
    height: '100%',
    width: theme.spacing(70),

    padding: theme.spacing(6),

    backgroundColor: theme.colors['bg/dark'],

    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(8),
  },

  navigation: {
    flex: 1,
    display: 'inline-flex',
    flexDirection: 'column',
    gap: theme.spacing(8),
    justifyContent: 'flex-start',
  },

  list: {
    margin: 0,
    padding: 0,

    color: theme.colors['bg/light'],
  },

  head: {
    ...theme.typography['body/l'],

    marginBottom: theme.spacing(2),

    display: 'flex',
    gap: theme.spacing(2),
  },

  active: {
    color: theme.colors['blue/2'],
  },

  item: {
    ...theme.typography['body/s'],

    padding: `${theme.spacing(1)} ${theme.spacing(8)}`,
    paddingRight: 0,

    '&:hover': {
      cursor: 'pointer',
      color: theme.colors['blue/2'],
    },
  },
}));

export default useStiles;
