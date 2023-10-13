export type Typography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body/xl'
  | 'body/l'
  | 'body/m'
  | 'body/s'
  | 'body/xs'
  | 'body/xxs'
  | 'button/m';

export type TypographyDefinition = {
  fontFamily: 'NunitoSans';
  lineHeight: 'normal';
  fontStyle: 'normal';
  fontWeight: number;
  fontSize: `${number}px`;
};

export const typography: Record<Typography, TypographyDefinition> = {
  h1: {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: `48px`,
  },
  h2: {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: `32px`,
  },
  h3: {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: `28px`,
  },
  'body/xl': {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: `22px`,
  },
  'body/l': {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: `20px`,
  },
  'body/m': {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: `18px`,
  },
  'body/s': {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: `16px`,
  },
  'body/xs': {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: `14px`,
  },
  'body/xxs': {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: `12px`,
  },
  'button/m': {
    fontFamily: 'NunitoSans',
    lineHeight: `normal`,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: `16px`,
  },
};
