import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Popover' })(() => ({
  root: {
    position: 'relative',
  },

  popover: {
    width: '100%',

    position: 'absolute',
    top: '100%',
  },
}));

export default useStyles;
