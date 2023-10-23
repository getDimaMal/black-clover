import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'AuthLayout' })((theme) => ({
  root: {
    minWidth: '100%',
    minHeight: '100%',

    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundImage: 'url(assets/images/svg/background.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  paper: {
    padding: theme.spacing(8),

    width: '100%',
    maxWidth: `calc(300px + 2px + (${theme.spacing(16)}) )`,

    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: theme.spacing(8),

    position: 'relative',
  },
}));

export default useStyles;
