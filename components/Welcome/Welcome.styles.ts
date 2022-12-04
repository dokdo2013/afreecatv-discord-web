import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 65,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 30,
      marginTop: 30,
    },
  },
  center: {
    [theme.fn.smallerThan('xs')]: {
      marginLeft: 4,
      marginRight: 4,
    },
  },
  br: {
    display: 'block',

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
}));
