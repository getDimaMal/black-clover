export type Spacings =
  | 'button-m'
  | 'clip-m'
  | 'table-container-m'
  | 'table-item-m'
  | 'tag-m'
  | 'tag-svg-m'
  | 'spacing/4'
  | 'spacing/8'
  | 'spacing/12'
  | 'spacing/16'
  | 'spacing/20';

export const spacings: Record<
  Spacings,
  `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
> = {
  'button-m': '10px 16px',
  'clip-m': '4px 12px',

  'table-container-m': '16px',
  'table-item-m': '8px 20px 13px 20px',

  'tag-m': '4px 12px',
  'tag-svg-m': '4px',

  'spacing/4': '4px',
  'spacing/8': '8px',
  'spacing/12': '12px',
  'spacing/16': '16px',
  'spacing/20': '20px',
};
