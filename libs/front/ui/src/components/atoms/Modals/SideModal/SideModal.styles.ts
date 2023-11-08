import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'SideModal' })((theme) => ({
  root: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  modal: {
    padding: `${theme.spacing(8)} ${theme.spacing(10)}`,

    width: '30%',
    widthMin: `calc(${theme.spacing(10)} * 2 + ${theme.spacing(90)})`,

    flex: '1',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: theme.spacing(3),

    backgroundColor: theme.colors['bg/light'],
  },

  header: {
    width: '100%',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
