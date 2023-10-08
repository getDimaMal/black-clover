export type BorderRadius =
  | 'button-m'
  | 'clip-m'
  | 'table-container-header-m'
  | 'table-container-footer-m'
  | 'tag-m'
  | 'radius/8';

export const borderRadius: Record<BorderRadius, `${number}px` | `${number}px ${number}px ${number}px ${number}px`> = {
  'button-m': '8px',
  'clip-m': '8px',

  'table-container-header-m': '8px 8px 0px 0px',
  'table-container-footer-m': '0px 0px 8px 8px',

  'tag-m': '8px',

  'radius/8': '8px',
};
