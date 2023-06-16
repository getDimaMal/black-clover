import { makeStyles } from '../../../theme/makeStyles';

import { Color } from './Button';

type Props = {
  color: Color;
};

const useStyles = makeStyles<Props>({ name: 'Button' })((theme, { color }) => ({
  root: {
    ...theme.typography['button-m'],

    border: 'none',
    color: theme.colors[`text-button-${color}`],
    backgroundColor: theme.colors[`bg-button-${color}`],

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors[`bg-button-${color}-hover`],
    },

    '&:active': {
      backgroundColor: theme.colors[`bg-button-${color}-active`],
    },

    '&:disabled': {
      backgroundColor: theme.colors['bg-button-disabled'],
      cursor: 'not-allowed',
    },
  },
}));

export default useStyles;
