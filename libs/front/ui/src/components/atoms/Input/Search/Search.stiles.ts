import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Search' })((theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  fullWidth: {
    width: '100%',
  },

  field: {
    ...theme.typography['body/xs'],
    color: theme.colors['text/grey/1'],

    backgroundColor: theme.colors['bg/light'],

    border: 'none',
    borderRadius: '50px',
    outline: '1px solid',
    outlineColor: theme.colors['field/default'],

    width: '100%',
    display: 'block',
    boxSizing: 'border-box',

    padding: `${theme.spacing(3)} ${theme.spacing(9)}`,

    pointerEvents: 'auto',

    '::placeholder': {
      color: theme.colors['text/disabled'],
    },

    ':focus': {
      outlineColor: theme.colors['field/focused'],
      color: theme.colors['text/black/1'],
    },
  },

  icons: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing(3),

    color: theme.colors['text/disabled'],

    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',

    position: 'absolute',
    top: 0,

    pointerEvents: 'none',
  },

  iconButton: {
    pointerEvents: 'auto',
  },
}));

export default useStyles;
