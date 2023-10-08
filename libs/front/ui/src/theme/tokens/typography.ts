export type Typography =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'button-m'
  | 'body-s'
  | 'body-m'
  | 'body-l'
  | 'body-bold-m'
  | 'text-m';

export type TypographyDefinition = {
  fontFamily: 'TTHoves';
  fontStyle: 'normal';
  fontWeight: number;
  fontSize: `${number}px`;
  lineHeight?: `${number}px` | number;
};

export const typography: Record<Typography, TypographyDefinition> = {
  headline1: {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '57px',
  },
  headline2: {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '45px',
  },
  headline3: {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '36px',
  },
  headline4: {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '28px',
  },
  headline5: {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
  },
  'button-m': {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
  },
  'body-m': {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: 1.15,
  },
  'body-bold-m': {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: 1.15,
  },
  'body-s': {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: 1.15,
  },
  'body-l': {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: 1.15,
  },
  'text-m': {
    fontFamily: 'TTHoves',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
  },
};
