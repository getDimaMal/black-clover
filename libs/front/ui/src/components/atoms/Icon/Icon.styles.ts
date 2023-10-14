import { makeStyles } from '../../../theme/makeStyles';

export const useStyles = makeStyles({ name: 'Icon' })(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  xl: {
    width: '80px',
    height: '80px',
    '& svg': {
      width: '80px',
      height: '80px',
    },
  },

  md: {
    width: '26px',
    height: '26px',
    '& svg': {
      width: '24px',
      height: '24px',
    },
  },

  sm: {
    width: '16px',
    height: '16px',
    '& svg': {
      width: '16px',
      height: '16px',
    },
  },
}));
