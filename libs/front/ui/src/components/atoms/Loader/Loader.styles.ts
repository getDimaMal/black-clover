import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Loader' })(() => ({
  root: {
    width: '100%',
    height: '100%',
    padding: 12,
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: '.9',
  },
}));

export default useStyles;
