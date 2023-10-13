import { makeStyles } from '../../../theme/makeStyles';

import { TagColors } from './Tag';

const useStyles = makeStyles<{ color: TagColors }>({ name: 'Tag' })((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.spacings['tag-m'],
    borderRadius: theme.borderRadius['tag-m'],
    svg: {
      marginRight: theme.spacings['tag-svg-m'],
      circle: {},
    },
  },
}));

export default useStyles;
