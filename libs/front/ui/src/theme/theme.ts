import { BorderRadius, borderRadius } from './tokens/borderRadius';
import { BoxShadows, boxShadows } from './tokens/boxShadows';
import { Colors, defaultColors } from './tokens/colors';
import { FontFace, NunitoSansBold, NunitoSansRegular, NunitoSansSemiBold } from './tokens/fonts';
import { logo } from './tokens/logo';
import { Typography, typography, TypographyDefinition } from './tokens/typography';

export type Theme = {
  fontFaces: FontFace[];
  colors: Record<Colors, string>;
  spacing: (num: 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 70) => `${number}px`;
  boxShadows: Record<BoxShadows, string>;
  borderRadius: Record<BorderRadius, string>;
  typography: Record<Typography, TypographyDefinition>;
  logo: typeof logo;
};

const baseTheme: Omit<Theme, 'colors'> = {
  typography,
  boxShadows,
  borderRadius,
  fontFaces: [NunitoSansRegular, NunitoSansSemiBold, NunitoSansBold],
  spacing: (num) => `${num * 4}px`,
  logo,
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: defaultColors,
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: defaultColors,
};
