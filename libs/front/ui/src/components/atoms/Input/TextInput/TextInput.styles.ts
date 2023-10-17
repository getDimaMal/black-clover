import { makeStyles } from '../../../../theme/makeStyles';

export const useStyles = makeStyles({ name: 'TextInput' })((theme) => ({
  root: {
    ...theme.typography['body/s'],
    color: theme.colors['text/grey/1'],
    display: 'block',

    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    paddingRight: theme.spacing(9),

    border: 'none',
    borderRadius: '4px',
    outline: '1px solid',
    outlineColor: theme.colors['field/default'],

    backgroundColor: theme.colors['bg/light'],

    ':focus': {
      outlineColor: theme.colors['field/focused'],
      color: theme.colors['text/black/1'],
    },

    ':disabled': {
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
