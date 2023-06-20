import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TextField' })((theme) => ({
  label: {
    ...theme.typography['text-m'],
  },
}));

export default useStyles;
