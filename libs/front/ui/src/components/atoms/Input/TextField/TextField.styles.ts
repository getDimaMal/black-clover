import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TextField' })((theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
  },

  label: {
    ...theme.typography['body/xs'],
    color: theme.colors['text/grey/1'],

    padding: `0 ${theme.spacing(1)}`,
    backgroundColor: theme.colors['bg/light'],

    position: 'absolute',
    top: '2px',
    left: '12px',
  },

  buttonContainer: {
    position: 'absolute',
    display: 'block',
    top: '18px',
    right: '4px',
  },

  message: {
    ...theme.typography['body/xxs'],
    position: 'absolute',
    top: '57px',
    left: '9px',
  },

  error: {
    color: theme.colors['text/error'],
  },

  success: {
    color: theme.colors['text/success'],
  },
}));

export default useStyles;
