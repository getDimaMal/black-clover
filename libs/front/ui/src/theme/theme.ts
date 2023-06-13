export type Theme = {
  colors: {
    // TODO to be HEX STRING
    primary: string;
    secondary: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    primary: 'grey',
    secondary: 'blue',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: 'black',
    secondary: 'red',
  },
};
