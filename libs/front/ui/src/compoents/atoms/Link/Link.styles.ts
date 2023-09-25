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

  textM: { ...theme.typography['text-m'] },
}));
