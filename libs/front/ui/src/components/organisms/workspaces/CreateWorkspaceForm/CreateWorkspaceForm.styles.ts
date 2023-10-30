import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'CreateWorkspaceForm' })((theme) => ({
  root: {
    width: theme.spacing(84),

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(4),
  },

  alignCenter: {
    textAlign: 'center',
  },
}));

export default useStyles;
