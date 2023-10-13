import { BorderRadius, borderRadius } from './tokens/borderRadius';
import { BoxShadows, boxShadows } from './tokens/boxShadows';
import { Colors, defaultColors } from './tokens/colors';
import { FontFace, NunitoSansBold, NunitoSansRegular, NunitoSansSemiBold } from './tokens/fonts';
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
  fontFaces: [NunitoSansRegular, NunitoSansSemiBold, NunitoSansBold],
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: defaultColors,
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: defaultColors,
};
