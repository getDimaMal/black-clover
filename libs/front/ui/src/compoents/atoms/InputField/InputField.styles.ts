import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'InputField' })((theme) => ({
  label: {
    ...theme.typography['text-m'],
  },
}));

export default useStyles;
