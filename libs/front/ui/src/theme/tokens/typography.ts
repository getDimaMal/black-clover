export type Typography =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'button-m'
  | 'body-m'
  | 'text-m';

export type TypographyDefinition = {
  fontFamily: 'TTHoves';
  fontStile: 'normal';
  fontWeight: number;
  fontSize: `${number}px`;
};

export const typography: Record<Typography, TypographyDefinition> = {
  headline1: {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 800,
    fontSize: '57px',
  },
  headline2: {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 700,
    fontSize: '45px',
  },
  headline3: {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 700,
    fontSize: '36px',
  },
  headline4: {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 700,
    fontSize: '28px',
  },
  headline5: {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 700,
    fontSize: '20px',
  },
  'button-m': {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 400,
    fontSize: '18px',
  },
  'body-m': {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 400,
    fontSize: '18px',
  },
  'text-m': {
    fontFamily: 'TTHoves',
    fontStile: 'normal',
    fontWeight: 400,
    fontSize: '12px',
  },
};
