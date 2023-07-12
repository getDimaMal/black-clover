import { makeStyles } from '../../../theme/makeStyles';
import { Colors } from '../Alert/Alert';

export const useStyles = makeStyles<{ color: Colors }>({ name: 'Link' })((theme, { color }) => ({
  root: {
    textDecoration: 'underline',
    color: theme.colors[`text-${color}`],

    '&:hover': {
      cursor: 'pointer',
    },
  },

  textL: { ...theme.typography['text-l'] },
  textM: { ...theme.typography['text-m'] },
  textS: { ...theme.typography['text-s'] },
}));
