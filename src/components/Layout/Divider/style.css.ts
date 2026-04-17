import { recipe } from '@vanilla-extract/recipes';
import { black50 } from '@/tokens/colors.ts'; // 기본 컬러 사용

export const dividerRecipe = recipe({
  base: {
    backgroundColor: black50,
    border: 'none',
    display: 'block',
    flexShrink: 0,
  },
  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        height: '1px',
        margin: '8px 0', // 기본 마진
      },
      vertical: {
        width: '1px',
        height: '100%',
        minHeight: '12px', // 너무 짧아지지 않게 최소 높이 지정
        margin: '0 8px',
        display: 'inline-block',
        verticalAlign: 'middle',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
