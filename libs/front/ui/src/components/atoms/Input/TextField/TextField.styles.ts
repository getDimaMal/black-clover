import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TextField' })((theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },

  label: {
    ...theme.typography['body/xxs'],
    color: theme.colors['text/grey/1'],

    padding: `0 ${theme.spacing(1)}`,
    backgroundColor: theme.colors['bg/light'],

    position: 'absolute',
    top: '0px',
    left: '12px',

    borderRadius: '50px',
  },

  buttonContainer: {
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: theme.spacing(2),
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
