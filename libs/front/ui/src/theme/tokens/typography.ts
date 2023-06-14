export type Typography =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'body-m'
  | 'body-s'
  | 'button-l'
  | 'button-m'
  | 'button-s'
  | 'button-xs'
  | 'text-l'
  | 'text-m'
  | 'text-s';

export type TypographyDefinition = Partial<{
  fontFamily: string;
  fontWeight: number;
  fontStile: 'normal' | 'italic';
  fontSize: `${number}px`;
  lineHeight: `${number}px`;
  letterSpacing: 'none';
  paragraphSpacing: 'none';
  textDecoration: 'none' | 'underline' | 'line-through';
  textTransform: 'none' | 'uppercase';
}>;

export const typography: Record<Typography, TypographyDefinition> = {
  headline1: {
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '57px',
    lineHeight: '64px',
  },
  headline2: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '45px',
    lineHeight: '55px',
  },
  headline3: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '44px',
  },
  headline4: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '36px',
  },
  headline5: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '28px',
  },
  'body-m': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '28px',
  },
  'body-s': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
  },
  'button-l': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
  },
  'button-m': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
  },
  'button-s': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '16px',
  },
  'button-xs': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
  },
  'text-l': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
  },
  'text-m': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '19px',
  },
  'text-s': {
    fontFamily: 'HindSiliguri',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '19px',
  },
};
