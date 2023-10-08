import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Button' })((theme) => ({
  root: {
    ...theme.typography['button-m'],

    border: 'none',
    padding: theme.spacings['button-m'],
    borderRadius: theme.borderRadius['button-m'],
  },

  primary: {
    color: theme.colors['text-button-primary'],
    boxShadow: theme.boxShadows['button-primary'],
    backgroundColor: theme.colors['bg-button-primary'],

    '&:hover': {
      cursor: 'pointer',
      color: theme.colors['text-button-primary-hover'],
      boxShadow: theme.boxShadows['button-primary-hover'],
      backgroundColor: theme.colors['bg-button-primary-hover'],
    },

    '&:active': {
      color: theme.colors['text-button-primary-active'],
      boxShadow: theme.boxShadows['button-primary-active'],
      backgroundColor: theme.colors['bg-button-primary-active'],
    },

    '&:disabled': {
      color: theme.colors['text-button-primary-disabled'],
      boxShadow: theme.boxShadows['button-primary-disabled'],
      backgroundColor: theme.colors['bg-button-primary-disabled'],
      cursor: 'not-allowed',
    },
  },

  secondary: {
    color: theme.colors['text-button-secondary'],
    backgroundColor: theme.colors['bg-button-secondary'],

    '&:hover': {
      cursor: 'pointer',
      color: theme.colors['text-button-secondary-hover'],
      backgroundColor: theme.colors['bg-button-secondary-hover'],
    },

    '&:active': {
      color: theme.colors['text-button-secondary-active'],
      backgroundColor: theme.colors['bg-button-secondary-active'],
    },

    '&:disabled': {
      color: theme.colors['text-button-secondary-disabled'],
      backgroundColor: theme.colors['bg-button-secondary-disabled'],
      cursor: 'not-allowed',
    },
  },
}));

export default useStyles;
