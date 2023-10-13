import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Typography' })((theme) => ({
  root: {
    margin: 0,
  },

  h1: { ...theme.typography['h1'] },
  h2: { ...theme.typography['h2'] },
  h3: { ...theme.typography['h3'] },

  bodyXL: { ...theme.typography['body/xl'] },
  bodyL: { ...theme.typography['body/l'] },
  bodyM: { ...theme.typography['body/m'] },
  bodyS: { ...theme.typography['body/s'] },
  bodyXS: { ...theme.typography['body/xs'] },
  bodyXXS: { ...theme.typography['body/xxs'] },

  inherit: {},
}));

export default useStyles;
