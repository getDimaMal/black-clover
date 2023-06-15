import { Colors, darkColors, lightColors } from './tokens/colors';
import { FontFace, HindSiliguriRegular, PoppinsBold, PoppinsExtraBold, PoppinsMedium } from './tokens/fonts';
import { Typography, typography, TypographyDefinition } from './tokens/typography';

export type Theme = {
  fontFaces: FontFace[];
  colors: Record<Colors, string>;
  typography: Record<Typography, TypographyDefinition>;
};

const baseTheme: Omit<Theme, 'colors'> = {
  typography,
  fontFaces: [HindSiliguriRegular, PoppinsMedium, PoppinsBold, PoppinsExtraBold],
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: lightColors,
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: darkColors,
};
