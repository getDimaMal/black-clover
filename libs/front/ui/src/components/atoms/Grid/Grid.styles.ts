import { makeStyles } from '../../../theme/makeStyles';

type Props = Partial<{
  gap: number;
  size: number;
  direction: 'row' | 'column';
}>;

const useStyles = makeStyles<Props>({ name: 'Grid' })((theme, { gap = 0, size = 0, direction = 'row' }) => ({
  container: {
    width: '100%',
    height: '100%',

    flex: 1,
    display: 'inline-flex',
    flexDirection: direction,
    gap: theme.spacing(gap),
  },

  item: {
    ...(size && { flex: size }),
    display: 'inline-flex',
  },
}));

export default useStyles;
