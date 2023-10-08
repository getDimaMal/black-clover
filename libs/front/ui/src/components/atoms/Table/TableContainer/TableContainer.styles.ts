import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'TableContainer' })((theme) => ({
  root: {
    color: theme.colors['text-primary'],
    ...theme.typography['body-m'],

    borderRadius: theme.borderRadius['radius/8'],
    border: `1px solid ${theme.colors['divider-color']}`,

    overflow: 'hidden',
  },

  header: {
    padding: theme.spacings['spacing/8'],

    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: theme.colors['background'],
  },

  block: {
    marginTop: theme.spacings['spacing/4'],
  },

  label: {
    ...theme.typography['body-s'],
  },

  subLabel: {
    ...theme.typography['body-l'],
    color: theme.colors['text-secondary'],
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse',

    border: `solid ${theme.colors['divider-color']}`,
    borderWidth: '1px 0px',
  },

  footer: {
    height: theme.spacings['spacing/20'],
    backgroundColor: theme.colors['background'],
  },
}));

export default useStyles;
