export type FontFace = {
  fontFamily: string;
  fontWeight: number;
  src: `url(${string})`;
};

export const HindSiliguriRegular: FontFace = {
  fontFamily: 'HindSiliguri',
  fontWeight: 400,
  src: 'url(assets/fonts/HindSiliguri/HindSiliguri-Regular.ttf)',
};

export const PoppinsMedium: FontFace = {
  fontFamily: 'Poppins',
  fontWeight: 500,
  src: `url(assets/fonts/Poppins/Poppins-Medium.ttf)`,
};

export const PoppinsBold: FontFace = {
  fontFamily: 'Poppins',
  fontWeight: 700,
  src: 'url(assets/fonts/Poppins/Poppins-Bold.ttf)',
};

export const PoppinsExtraBold: FontFace = {
  fontFamily: 'Poppins',
  fontWeight: 800,
  src: `url(assets/fonts/Poppins/Poppins-ExtraBold.ttf)`,
};
