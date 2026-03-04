import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from '../tokens/colors';

export const vars = createGlobalTheme(':root', {
  color: {
    ...colors,
    // 시맨틱 컬러(의미 기반)를 추가하면 관리가 더 쉽습니다.
    primary: colors.blue[500],
    secondary: colors.green[500],
    background: colors.white,
    text: {
      main: colors.black[900],
      sub: colors.black[500],
    },
  },
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
  },
});
