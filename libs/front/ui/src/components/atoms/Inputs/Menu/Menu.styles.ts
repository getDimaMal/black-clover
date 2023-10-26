import { makeStyles } from '../../../../theme/makeStyles';

const useStyles = makeStyles({ name: 'Menu' })((theme) => ({
  root: {
    margin: 0,
    padding: 0,

    userSelect: 'none',
    listStyleType: 'none',

    maxHeight: '166px',
    overflowY: 'scroll',
  },

  listItem: {
    ...theme.typography['body/xs'],
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,

    borderRadius: '8px',

    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing(2),

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors['bg/grey/2'],
    },
  },

  subLabel: {
    ...theme.typography['body/xs'],
    color: theme.colors['text/disabled'],

    paddingLeft: theme.spacing(1),
  },

  selected: {
    color: theme.colors['button/default'],
  },

  checkboxOn: {
    '& svg path': {
      stroke: theme.colors['bg/light'],
      fill: theme.colors['button/default'],
    },
  },

  checkboxOff: {
    '& svg path': {
      stroke: theme.colors['button/default'],
    },
  },
}));

export default useStyles;
