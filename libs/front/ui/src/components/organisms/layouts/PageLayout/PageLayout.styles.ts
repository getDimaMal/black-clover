import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'PageLayout' })((theme) => ({
  root: {
    width: '100%',

    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: theme.spacing(5),

    overflow: 'scroll',
  },

  header: {
    padding: `${theme.spacing(5)} ${theme.spacing(11)}`,

    boxShadow: theme.shadows['shadow/1'],
    backgroundColor: theme.colors['bg/light'],

    position: 'sticky',
    top: 0,

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
  },

  content: {
    padding: `0 ${theme.spacing(11)}`,
    paddingBottom: theme.spacing(11),

    flex: 1,
  },
}));

export default useStyles;
