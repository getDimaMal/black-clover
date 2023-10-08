export type FontFace = {
  fontFamily: string;
  fontWeight: number;
  src: `url(${string})`;
};

export const TTHovesRegular: FontFace = {
  fontFamily: 'TTHoves',
  fontWeight: 400,
  src: 'url(assets/fonts/TTHoves/TTHoves-Regular.ttf)',
};

export const TTHovesMedium: FontFace = {
  fontFamily: 'TTHoves',
  fontWeight: 500,
  src: `url(assets/fonts/TTHoves/TTHoves-Medium.ttf)`,
};

export const TTHovesDemiBold: FontFace = {
  fontFamily: 'TTHoves',
  fontWeight: 600,
  src: `url(assets/fonts/TTHoves/TTHoves-DemiBold.ttf)`,
};

export const TTHovesBold: FontFace = {
  fontFamily: 'TTHoves',
  fontWeight: 700,
  src: 'url(assets/fonts/TTHoves/TTHoves-Bold.ttf)',
};
