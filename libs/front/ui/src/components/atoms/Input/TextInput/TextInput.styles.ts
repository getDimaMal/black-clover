import { makeStyles } from '../../../../theme/makeStyles';

export const useStyles = makeStyles({ name: 'TextInput' })((theme) => ({
  root: {
    ...theme.typography['body/s'],
    color: theme.colors['text/grey/1'],

    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,

    border: 'none',
    borderRadius: '4px',
    outline: '1px solid',
    outlineColor: theme.colors['field/default'],

    ':focus': {
      outlineColor: theme.colors['field/focused'],
      color: theme.colors['text/black/1'],
    },

    ':disabled': {
      backgroundColor: 'inherit',
      color: theme.colors['text/disabled'],
      outlineColor: theme.colors['field/disabled'],
    },
  },

  error: {
    outlineColor: theme.colors['field/error'],
  },

  success: {
    outlineColor: theme.colors['field/success'],
  },
}));
