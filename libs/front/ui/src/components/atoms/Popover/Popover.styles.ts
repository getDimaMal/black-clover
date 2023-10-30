import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Popover' })(() => ({
  root: {
    position: 'relative',
  },

  popover: {
    minWidth: '100%',
    maxWidth: '300px',
    whiteSpace: 'nowrap',

    position: 'absolute',
    top: '100%',
    left: 0,

    display: 'flex',
    justifyContent: 'flex-start',
  },

  rightAlign: {
    right: 0,
    left: 'auto',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
