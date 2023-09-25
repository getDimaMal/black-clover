import { Colors, darkColors, lightColors } from './tokens/colors';
import { FontFace, TTHovesBold, TTHovesMedium, TTHovesRegular } from './tokens/fonts';
import { Typography, typography, TypographyDefinition } from './tokens/typography';

export type Theme = {
  fontFaces: FontFace[];
  colors: Record<Colors, string>;
  typography: Record<Typography, TypographyDefinition>;
};

const baseTheme: Omit<Theme, 'colors'> = {
  typography,
  fontFaces: [TTHovesRegular, TTHovesMedium, TTHovesBold],
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: lightColors,
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: darkColors,
};
