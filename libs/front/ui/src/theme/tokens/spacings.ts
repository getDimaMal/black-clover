export type Spacings = 'button-m' | 'clip-m' | 'tag-m' | 'tag-svg-m';

export const spacings: Record<
  Spacings,
  `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
> = {
  'button-m': '10px 16px',
  'clip-m': '4px 12px',
  'tag-m': '4px 12px',
  'tag-svg-m': '4px',
};
