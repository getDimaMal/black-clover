import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'EventsTable' })((theme) => ({
  headerLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },

  cellFlexColumn: {
    minWidth: 'fit-content',
    whiteSpace: 'nowrap',

    display: 'flex',
    flexDirection: 'column',
  },

  cellFlexRow: {
    display: 'flex',
    gap: theme.spacing(2),
  },

  cellGap: {
    gap: theme.spacing(1),
  },

  cellWrap: {
    flexWrap: 'wrap',
  },

  fontWeightBold: {
    fontWeight: 700,
  },
}));

export default useStyles;
