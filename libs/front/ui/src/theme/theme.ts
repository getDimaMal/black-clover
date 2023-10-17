import { BorderRadius, borderRadius } from './tokens/borderRadius';
import { Colors, defaultColors } from './tokens/colors';
import { FontFace, NunitoSansBold, NunitoSansRegular, NunitoSansSemiBold } from './tokens/fonts';
import { Shadows, shadows } from './tokens/shadows';
import { Typography, typography, TypographyDefinition } from './tokens/typography';

export type Theme = {
  fontFaces: FontFace[];
  colors: Record<Colors, string>;
  shadows: Record<Shadows, string>;
  borderRadius: Record<BorderRadius, string>;
  typography: Record<Typography, TypographyDefinition>;
  spacing: (num: 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 70) => `${number}px`;
  logo: string;
};

const baseTheme: Omit<Theme, 'colors'> = {
  typography,
  fontFaces: [NunitoSansRegular, NunitoSansSemiBold, NunitoSansBold],
  shadows,
  borderRadius,
  spacing: (num) => `${num * 4}px`,
  logo: 'url(assets/images/svg/logo.svg)',
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: defaultColors,
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: defaultColors,
};
