export type Spacings = 'button-m';

export const spacings: Record<
  Spacings,
  `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
> = {
  'button-m': '10px 16px',
};
