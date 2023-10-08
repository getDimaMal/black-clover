export type Spacings = 'button-m' | 'clip-m' | 'tag-m' | 'tag-svg-m' | 'spacing/4' | 'spacing/8' | 'spacing/20';

export const spacings: Record<
  Spacings,
  `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
> = {
  'button-m': '10px 16px',
  'clip-m': '4px 12px',
  'tag-m': '4px 12px',
  'tag-svg-m': '4px',

  'spacing/4': '4px',
  'spacing/8': '8px',
  'spacing/20': '20px',
};
