import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Popover' })(() => ({
  root: {
    position: 'relative',
  },

  popover: {
    minWidth: '100%',
    whiteSpace: 'nowrap',

    position: 'absolute',
    top: '100%',
  },
}));

export default useStyles;
