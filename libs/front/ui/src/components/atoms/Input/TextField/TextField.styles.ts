import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TextField' })((theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    paddingBottom: theme.spacing(4),
  },

  inputContainer: {
    display: 'inline-block',
  },

  label: {
    ...theme.typography['body/xxs'],
    color: theme.colors['text/grey/1'],

    paddingLeft: theme.spacing(1),
  },

  buttonContainer: {
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(4),

    position: 'absolute',
    top: '0',
    right: '0',

    display: 'flex',
    alignItems: 'center',
  },

  message: {
    ...theme.typography['body/xxs'],
    position: 'absolute',
    bottom: '0px',
    left: '16px',
  },

  error: {
    color: theme.colors['text/error'],
  },

  success: {
    color: theme.colors['text/success'],
  },
}));

export default useStyles;
