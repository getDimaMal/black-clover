import { makeStyles } from '../../../../theme/makeStyles';

export const useStyles = makeStyles({ name: 'TabContainer' })((theme) => ({
  root: {
    display: 'flex',
    gap: theme.spacings['spacing/16'],
    borderBottom: `0.5px solid ${theme.colors['divider-color']}`,
  },
}));
