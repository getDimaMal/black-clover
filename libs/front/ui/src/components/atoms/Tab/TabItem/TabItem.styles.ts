import { makeStyles } from '../../../../theme/makeStyles';

export const useStyles = makeStyles({ name: 'TabItem' })(() => ({
  root: {
    display: 'inline-block',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
  },
  active: {},
}));
