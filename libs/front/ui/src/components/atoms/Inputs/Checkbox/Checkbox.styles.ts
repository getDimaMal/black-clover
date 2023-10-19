import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Checkbox' })((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(3),

    cursor: 'pointer',
    userSelect: 'none',
  },

  checkbox: {
    margin: 0,
    width: theme.spacing(6),
    height: theme.spacing(6),

    cursor: 'pointer',
  },

  label: {
    ...theme.typography['body/xs'],
  },
}));

export default useStyles;
