import { makeStyles } from '../../../../theme/makeStyles';

export const useStyles = makeStyles({ name: 'TabItem' })((theme) => ({
  root: {
    ...theme.typography['body-bold-m'],
    padding: `${theme.spacings['spacing/8']} ${theme.spacings['spacing/20']} ${theme.spacings['spacing/12']}`,
    display: 'inline-block',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
  },
  active: {},
}));
