import { makeStyles } from '../../../../theme/makeStyles';

const useStiles = makeStyles({ name: 'SidebarLayout' })((theme) => ({
  root: {
    flex: 1,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    display: 'inline-flex',
  },

  content: {
    padding: theme.spacing(6),

    flex: 1,
    display: 'flex',

    overflow: 'scroll',
  },
}));

export default useStiles;
