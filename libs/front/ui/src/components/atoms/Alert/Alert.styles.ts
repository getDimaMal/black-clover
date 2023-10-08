import { makeStyles } from '../../../theme/makeStyles';

import { Colors } from './Alert';

const useStyles = makeStyles<{ color: Colors }>({ name: 'Alert' })((theme, { color }) => ({
  root: {
    margin: 0,
    fontStile: 'normal',
    color: theme.colors[`text-${color}`],
  },

  bodyM: { ...theme.typography['body-m'] },

  textM: { ...theme.typography['text-m'] },
}));

export default useStyles;
