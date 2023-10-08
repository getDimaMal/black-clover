import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Clip' })((theme) => ({
  root: {
    ...theme.typography['body-m'],
    display: 'inline-block',
    padding: theme.spacings['clip-m'],
    borderRadius: theme.borderRadius['clip-m'],
    border: `1px solid ${theme.colors['divider-color']}`,
  },
}));

export default useStyles;
