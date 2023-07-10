import { makeStyles } from '../../../theme/makeStyles';

import { Colors } from './Alert';

const useStyles = makeStyles<{ color: Colors }>({ name: 'Alert' })((theme, { color }) => ({
  root: {
    margin: 0,
    fontStile: 'normal',
    color: theme.colors[`text-${color}`],
  },

  bodyM: { ...theme.typography['body-m'] },
  bodyS: { ...theme.typography['body-s'] },

  textL: { ...theme.typography['text-l'] },
  textM: { ...theme.typography['text-m'] },
  textS: { ...theme.typography['text-s'] },
}));

export default useStyles;
