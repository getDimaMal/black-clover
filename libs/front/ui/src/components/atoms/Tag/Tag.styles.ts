import { makeStyles } from '../../../theme/makeStyles';

import { TagColors } from './Tag';

const useStyles = makeStyles<{ color: TagColors }>({ name: 'Tag' })((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: theme.borderRadius['tag-m'],
    svg: {
      circle: {},
    },
  },
}));

export default useStyles;
