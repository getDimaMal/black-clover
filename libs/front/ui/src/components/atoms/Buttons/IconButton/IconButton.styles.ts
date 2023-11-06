import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'IconButton' })((theme) => ({
  root: {
    padding: theme.spacing(1),

    border: 'none',
    borderRadius: '100%',

    backgroundColor: 'inherit',
    color: theme.colors['text/disabled'],

    '&:hover': {
      cursor: 'pointer',
      color: theme.colors['text/disabled'],
      backgroundColor: theme.colors['bg/grey/2'],
    },

    '&:active': {
      color: theme.colors['blue/1'],
      backgroundColor: theme.colors['bg/grey/3'],
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: theme.colors['stroke/disabled'],
    },
  },
}));

export default useStyles;
