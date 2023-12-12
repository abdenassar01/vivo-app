export type ThemeType = {
  background: string;
  secondaryBackground: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  secondaryText: string;
  helperText: string;
  secondaryBtnText: string;
  stepsIndicator: string;
  border: string;
};

const appColors = {
  primary: '#80BD0A',
  secondary: '#20A9E3',
  tertiary: '#E92220',
  white: '#FFFFFF',
  black: '#1F1F39',
  secondaryText: '#858597',
  helperText: '#BFBFBF',
  secondaryBtnText: '#6E6F72',
  stepsIndicator: '#E7E7E7',
  border: '#B8B8D2',
};

export const light: ThemeType = {
  background: appColors.white,
  secondaryBackground: '#FAF8FB',
  text: appColors.black,
  ...appColors,
};

export const dark: ThemeType = {
  background: '#242526',
  secondaryBackground: '#18191A',
  text: appColors.white,
  ...appColors,
};
