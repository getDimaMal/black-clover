import { BorderRadius, borderRadius } from './tokens/borderRadius';
import { BoxShadows, boxShadows } from './tokens/boxShadows';
import { Colors, darkColors, lightColors } from './tokens/colors';
import { FontFace, TTHovesBold, TTHovesDemiBold, TTHovesMedium, TTHovesRegular } from './tokens/fonts';
import { Spacings, spacings } from './tokens/spacings';
import { Typography, typography, TypographyDefinition } from './tokens/typography';

export type Theme = {
  fontFaces: FontFace[];
  colors: Record<Colors, string>;
  spacings: Record<Spacings, string>;
  boxShadows: Record<BoxShadows, string>;
  borderRadius: Record<BorderRadius, string>;
  typography: Record<Typography, TypographyDefinition>;
};

const baseTheme: Omit<Theme, 'colors'> = {
  spacings,
  typography,
  boxShadows,
  borderRadius,
  fontFaces: [TTHovesRegular, TTHovesMedium, TTHovesDemiBold, TTHovesBold],
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: lightColors,
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: darkColors,
};
