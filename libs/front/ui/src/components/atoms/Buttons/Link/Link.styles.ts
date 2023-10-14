import { makeStyles } from '../../../../theme/makeStyles';

export const useStyles = makeStyles({ name: 'Link' })((theme) => ({
  root: {
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    fontSize: `inherit`,
    textDecoration: 'underline',
    color: theme.colors['button/default'],

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
      color: theme.colors['button/hover'],
    },
  },
}));
