export type BoxShadows =
  | 'button-primary'
  | 'button-primary-hover'
  | 'button-primary-active'
  | 'button-primary-disabled';

export const boxShadows: Record<BoxShadows, string> = {
  'button-primary': '0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)',
  'button-primary-hover': '0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)',
  'button-primary-active': '0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)',
  'button-primary-disabled': '0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)',
};
