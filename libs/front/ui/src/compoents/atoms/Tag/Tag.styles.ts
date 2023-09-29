import { makeStyles } from '../../../theme/makeStyles';

import { TagColors } from './Tag';

const useStyles = makeStyles<{ color: TagColors }>({ name: 'Tag' })((theme, { color }) => ({
  root: {
    ...theme.typography['body-m'],
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.spacings['tag-m'],
    borderRadius: theme.borderRadius['tag-m'],
    border: `1px solid ${theme.colors['divider-color']}`,
    svg: {
      marginRight: theme.spacings['tag-svg-m'],
      circle: {
        fill: theme.colors[`tag-${color}`],
      },
    },
  },
}));

export default useStyles;
