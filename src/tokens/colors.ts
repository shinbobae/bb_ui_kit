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

export const blue50 = '#F5F8FE';
export const blue100 = '#EBF1FD';
export const blue200 = '#CCDBFA';
export const blue300 = '#99B7F5';
export const blue400 = '#6694F1';
export const blue500 = '#3370EC';
export const blue600 = '#3370EC';
export const blue700 = '#3163C9';

export const green50 = '#EEF7F0';
export const green100 = '#D8EDDE';
export const green200 = '#C3E2CB';
export const green300 = '#ADD8B9';
export const green400 = '#97CDA7';
export const green500 = '#81C395';
export const green600 = '#6CB882';
export const green700 = '#56AE70';

export const red50 = '#FBEDEE';
export const red100 = '#F6D3D5';
export const red200 = '#F1B9BC';
export const red300 = '#ECA0A3';
export const red400 = '#E78689';
export const red500 = '#E26C70';
export const red600 = '#DD5257';
export const red700 = '#B94B52';

export const mandarin50 = '#FCF3EA';
export const mandarin100 = '#F9E1CB';
export const mandarin200 = '#F5CEAD';
export const mandarin300 = '#F2BC8E';
export const mandarin400 = '#EFAA6F';
export const mandarin500 = '#EB9751';
export const mandarin600 = '#E88532';
export const mandarin700 = '#C27434';

export const yellow50 = '#FEF9EF';
export const yellow100 = '#FDF1D8';
export const yellow200 = '#FCE9C1';
export const yellow300 = '#FBE1AA';
export const yellow400 = '#F9D992';
export const yellow500 = '#F8D17B';
export const yellow600 = '#F7C964';
export const yellow700 = '#CEAB5C';

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
  },
} as const;

export type Colors = typeof colors;
