import { makeStyles } from '../../../theme/makeStyles';
import { Colors } from '../Alert/Alert';

export const useStyles = makeStyles<{ color: Colors }>({ name: 'Link' })(() => ({
  root: {
    textDecoration: 'underline',

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
