import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Button' })((theme) => ({
  root: {
    border: 'none',
    padding: theme.spacings['button-m'],
    borderRadius: theme.borderRadius['button-m'],
  },

  primary: {
    boxShadow: theme.boxShadows['button-primary'],

    '&:hover': {
      cursor: 'pointer',

      boxShadow: theme.boxShadows['button-primary-hover'],
    },

    '&:active': {
      boxShadow: theme.boxShadows['button-primary-active'],
    },

    '&:disabled': {
      boxShadow: theme.boxShadows['button-primary-disabled'],
      cursor: 'not-allowed',
    },
  },

  secondary: {
    '&:hover': {
      cursor: 'pointer',
    },

    '&:active': {},

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
}));

export default useStyles;
