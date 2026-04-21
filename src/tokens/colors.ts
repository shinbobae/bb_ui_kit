export const black0 = '#FFFFFF';
export const black10 = '#FAFAFA';
export const black20 = '#F5F5F6';
export const black50 = '#EBECED';
export const black100 = '#D7D8DB';
export const black200 = '#C2C5C9';
export const black300 = '#AEB1B7';
export const black400 = '#9A9EA4';
export const black500 = '#868B92';
export const black600 = '#727780';
export const black700 = '#5D646E';
export const black800 = '#49505C';
export const black900 = '#333D4B';

export const blue50 = '#f0f7ff';
export const blue100 = '#dbecff';
export const blue200 = '#b3d4ff';
export const blue300 = '#8ab9ff';
export const blue400 = '#5f98fa';
export const blue500 = '#3370ec';
export const blue600 = '#2253c7';
export const blue700 = '#1339a1';
export const blue800 = '#09237a';
export const blue900 = '#051554';

export const green50 = '#e6f5e8';
export const green100 = '#dae8dc';
export const green200 = '#bfdbc4';
export const green300 = '#93cfa1';
export const green400 = '#6bc282';
export const green500 = '#47b468';
export const green600 = '#318f50';
export const green700 = '#1e693a';
export const green800 = '#104224';
export const green900 = '#061c10';

export const red50 = '#fff2f0';
export const red100 = '#fff1f0';
export const red200 = '#ffd7d4';
export const red300 = '#ffaeab';
export const red400 = '#f57d7d';
export const red500 = '#e75055';
export const red600 = '#c23a43';
export const red700 = '#9c2733';
export const red800 = '#751724';
export const red900 = '#4f0f1a';

export const mandarin50 = '#fff9f0';
export const mandarin100 = '#fff7eb';
export const mandarin200 = '#ffe3c2';
export const mandarin300 = '#ffce99';
export const mandarin400 = '#ffb570';
export const mandarin500 = '#f49445';
export const mandarin600 = '#cf7230';
export const mandarin700 = '#a8531e';
export const mandarin800 = '#823911';
export const mandarin900 = '#5c250b';

export const yellow50 = '#fffef0';
export const yellow100 = '#fffde6';
export const yellow200 = '#fff7bd';
export const yellow300 = '#ffef94';
export const yellow400 = '#ffe46b';
export const yellow500 = '#fdd543';
export const yellow600 = '#d6ac2d';
export const yellow700 = '#b0861c';
export const yellow800 = '#8a630f';
export const yellow900 = '#63440a';

export const colors = {
  white: '#FFFFFF',
  black: {
    0: black0,
    10: black10,
    20: black20,
    50: black50,
    100: black100,
    200: black200,
    300: black300,
    400: black400,
    500: black500,
    600: black600,
    700: black700,
    800: black800,
    900: black900,
  },
  blue: {
    50: blue50,
    100: blue100,
    200: blue200,
    300: blue300,
    400: blue400,
    500: blue500,
    600: blue600,
    700: blue700,
    800: blue800,
    900: blue900,
  },
  green: {
    50: green50,
    100: green100,
    200: green200,
    300: green300,
    400: green400,
    500: green500,
    600: green600,
    700: green700,
    800: green800,
    900: green900,
  },
  red: {
    50: red50,
    100: red100,
    200: red200,
    300: red300,
    400: red400,
    500: red500,
    600: red600,
    700: red700,
    800: red800,
    900: red900,
  },
  mandarin: {
    50: mandarin50,
    100: mandarin100,
    200: mandarin200,
    300: mandarin300,
    400: mandarin400,
    500: mandarin500,
    600: mandarin600,
    700: mandarin700,
    800: mandarin800,
    900: mandarin900,
  },
  yellow: {
    50: yellow50,
    100: yellow100,
    200: yellow200,
    300: yellow300,
    400: yellow400,
    500: yellow500,
    600: yellow600,
    700: yellow700,
    800: yellow800,
    900: yellow900,
  },
} as const;

export type Colors = typeof colors;
