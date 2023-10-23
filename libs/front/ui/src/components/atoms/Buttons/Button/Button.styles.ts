import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Button' })((theme) => ({
  root: {
    ...theme.typography['button/m'],

    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,

    borderRadius: '50px',
    border: '1px solid transparent',
    boxShadow: theme.shadows['shadow/2'],

    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),

    '&:hover': {
      cursor: 'pointer',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  contained: {
    color: theme.colors['text/button/contained'],
    backgroundColor: theme.colors['button/default'],

    '&:hover': {
      backgroundColor: theme.colors['button/hover'],
    },

    '&:active': {
      backgroundColor: theme.colors['button/pressed'],
    },

    '&:disabled': {
      backgroundColor: theme.colors['stroke/disabled'],
      color: theme.colors['text/disabled'],
    },
  },

  outlined: {
    border: '1px solid',
    color: theme.colors['button/default'],
    borderColor: theme.colors['button/default'],
    backgroundColor: 'inherit',

    '&:hover': {
      color: theme.colors['button/hover'],
      borderColor: theme.colors['button/hover'],
      backgroundColor: theme.colors['bg/grey/2'],
    },

    '&:active': {
      color: theme.colors['button/pressed'],
      backgroundColor: theme.colors['bg/grey/3'],
      borderColor: theme.colors['button/pressed'],
    },

    '&:disabled': {
      color: theme.colors['text/disabled'],
      borderColor: theme.colors['stroke/disabled'],
    },
  },

  ghost: {
    backgroundColor: 'inherit',
    color: theme.colors['button/default'],

    '&:hover': {
      color: theme.colors['button/hover'],
      backgroundColor: theme.colors['bg/grey/2'],
    },

    '&:active': {
      color: theme.colors['button/pressed'],
      backgroundColor: theme.colors['bg/grey/3'],
    },

    '&:disabled': {
      color: theme.colors['text/disabled'],
    },
  },

  fullWidth: {
    width: '100%',

    display: 'inline-flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
