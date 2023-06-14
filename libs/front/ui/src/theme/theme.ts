import { FontFace, HindSiliguriRegular, PoppinsBold, PoppinsExtraBold, PoppinsMedium } from './tokens/fonts';
import { Typography, typography, TypographyDefinition } from './tokens/typography';

export type Theme = {
  colors: {
    // TODO to be HEX STRING
    primary: string;
    secondary: string;
  };
  fontFaces: FontFace[];
  typography: Record<Typography, TypographyDefinition>;
};

const baseTheme: Omit<Theme, 'colors'> = {
  typography,
  fontFaces: [HindSiliguriRegular, PoppinsMedium, PoppinsBold, PoppinsExtraBold],
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: 'grey',
    secondary: 'blue',
  },
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: 'black',
    secondary: 'red',
  },
};
