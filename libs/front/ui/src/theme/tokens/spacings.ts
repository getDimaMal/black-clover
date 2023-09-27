export type Spacings = 'button-m' | 'clip-m';

export const spacings: Record<
  Spacings,
  `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
> = {
  'button-m': '10px 16px',
  'clip-m': '4px 12px',
};
