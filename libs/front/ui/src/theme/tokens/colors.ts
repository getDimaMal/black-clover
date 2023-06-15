export type Colors =
  | 'bg-body'
  | 'bg-info'
  | 'bg-error'
  | 'bg-warning'
  | 'bg-success'
  | 'bg-primary'
  | 'bg-secondary'
  | 'bg-sidebar'
  | 'bg-button-primary'
  | 'bg-button-primary-hover'
  | 'bg-button-primary-active'
  | 'bg-button-secondary'
  | 'bg-button-secondary-hover'
  | 'bg-button-secondary-active'
  | 'bg-button-disabled'
  | 'text-main'
  | 'text-info'
  | 'text-error'
  | 'text-warning'
  | 'text-success'
  | 'text-primary'
  | 'text-secondary'
  | 'text-button-primary'
  | 'text-button-secondary'
  | 'line-main'
  | 'line-info'
  | 'line-error'
  | 'line-warning'
  | 'line-success'
  | 'line-primary'
  | 'line-secondary';

export const defaultColors: Omit<Record<Colors, string>, 'bg-body' | 'text-main' | 'line-main'> = {
  'bg-info': '#88CCF1',
  'bg-error': '#F2545B',
  'bg-warning': '#FFD166',
  'bg-success': '#37FF8B',
  'bg-primary': '#A34BD2',
  'bg-secondary': '#4EA692',
  'bg-sidebar': '#282A28',

  'bg-button-primary': '#A34BD2',
  'bg-button-primary-hover': '#B46CDA',
  'bg-button-primary-active': '#9031C4',

  'bg-button-secondary': '#4EA692',
  'bg-button-secondary-hover': '#66B7A4',
  'bg-button-secondary-active': '#418B7A',
  'bg-button-disabled': '#D2DAD5',

  'text-info': '#88CCF1',
  'text-error': '#F2545B',
  'text-warning': '#FFD166',
  'text-success': '#37FF8B',
  'text-primary': '#A34BD2',
  'text-secondary': '#4EA692',
  'text-button-primary': '#FFFFFF',
  'text-button-secondary': '#FFFFFF',

  'line-info': '#88CCF1',
  'line-error': '#F2545B',
  'line-warning': '#FFD166',
  'line-success': '#37FF8B',
  'line-primary': '#A34BD2',
  'line-secondary': '#4EA692',
};

export const lightColors: Record<Colors, string> = {
  ...defaultColors,
  'bg-body': '#E0E0E0',
  'text-main': '#000000',
  'line-main': '#CAD2C5',
};

export const darkColors: Record<Colors, string> = {
  ...defaultColors,
  'bg-body': '#282A28',
  'text-main': '#FFFFFF',
  'line-main': '#CAD2C5',
};
