import { makeStyles } from '../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Paper' })((theme) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(8),

    borderRadius: '16px',
    backgroundColor: theme.colors['bg/light'],
    border: `1px solid ${theme.colors['bg/blue/1']}`,
    boxShadow: theme.shadows['shadow/2'],
    overflow: 'hidden',
  },
}));

export default useStyles;
