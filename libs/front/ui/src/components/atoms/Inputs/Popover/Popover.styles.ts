import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Popover' })(() => ({
  root: {
    position: 'relative',
  },

  dropdown: {
    width: '100%',

    position: 'absolute',
    top: '100%',
  },

  closed: {
    display: 'none',
  },
}));

export default useStyles;
