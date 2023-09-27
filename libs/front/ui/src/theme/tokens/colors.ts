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
  | 'bg-button-primary-disabled'
  | 'bg-button-secondary'
  | 'bg-button-secondary-hover'
  | 'bg-button-secondary-active'
  | 'bg-button-secondary-disabled'
  | 'divider-color'
  | 'text-main'
  | 'text-info'
  | 'text-error'
  | 'text-warning'
  | 'text-success'
  | 'text-primary'
  | 'text-secondary'
  | 'text-button-primary'
  | 'text-button-primary-hover'
  | 'text-button-primary-active'
  | 'text-button-primary-disabled'
  | 'text-button-secondary'
  | 'text-button-secondary-hover'
  | 'text-button-secondary-active'
  | 'text-button-secondary-disabled'
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

  'bg-button-primary': '#3CB4E4',
  'bg-button-primary-hover': '#DCF1FA',
  'bg-button-primary-active': '#1987B3',
  'bg-button-primary-disabled': '#BDBDBD',

  'bg-button-secondary': '#FFF',
  'bg-button-secondary-hover': '#D2EEF9',
  'bg-button-secondary-active': '#FFF',
  'bg-button-secondary-disabled': '#BDBDBD',

  'divider-color': '#BDBDBD',

  'text-info': '#88CCF1',
  'text-error': '#F2545B',
  'text-warning': '#FFD166',
  'text-success': '#37FF8B',
  'text-primary': '#A34BD2',
  'text-secondary': '#4EA692',

  'text-button-primary': '#FFF',
  'text-button-primary-hover': '#757575',
  'text-button-primary-active': '#FFF',
  'text-button-primary-disabled': '#FFF',

  'text-button-secondary': '#212121',
  'text-button-secondary-hover': '#212121',
  'text-button-secondary-active': '#757575',
  'text-button-secondary-disabled': '#FFF',

  'line-info': '#88CCF1',
  'line-error': '#F2545B',
  'line-warning': '#FFD166',
  'line-success': '#37FF8B',
  'line-primary': '#A34BD2',
  'line-secondary': '#4EA692',
};

export const lightColors: Record<Colors, string> = {
  ...defaultColors,
  'bg-body': '#F3F4F6',
  'text-main': '#212121',
  'line-main': '#BDBDBD',
};

export const darkColors: Record<Colors, string> = {
  ...defaultColors,
  'bg-body': '#282A28',
  'text-main': '#FFFFFF',
  'line-main': '#CAD2C5',
};
