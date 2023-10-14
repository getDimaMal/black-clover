import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'IconButton' })((theme) => ({
  root: {
    padding: theme.spacing(1),

    border: 'none',
    borderRadius: '100%',

    backgroundColor: 'inherit',
    color: theme.colors['button/default'],

    '&:hover': {
      cursor: 'pointer',
      color: theme.colors['button/hover'],
      backgroundColor: theme.colors['bg/grey/2'],
    },

    '&:active': {
      color: theme.colors['button/pressed'],
      backgroundColor: theme.colors['bg/grey/3'],
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: theme.colors['text/disabled'],
    },
  },
}));

export default useStyles;
