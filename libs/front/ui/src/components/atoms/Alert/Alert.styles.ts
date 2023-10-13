import { makeStyles } from '../../../theme/makeStyles';

import { Colors } from './Alert';

const useStyles = makeStyles<{ color: Colors }>({ name: 'Alert' })(() => ({
  root: {
    margin: 0,
    fontStile: 'normal',
  },
}));

export default useStyles;
