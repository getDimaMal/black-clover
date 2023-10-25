import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Popover' })(() => ({
  root: {
    position: 'relative',
  },

  popover: {
    whiteSpace: 'nowrap',
    width: 'fit-content',

    position: 'absolute',
    top: '100%',
  },
}));

export default useStyles;
