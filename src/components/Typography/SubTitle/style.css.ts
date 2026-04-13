import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const brandColorVar = createVar();
export const subTitleRecipe = recipe({
  // 공통
  base: {
    fontWeight: 600,
    lineHeight: '150%',
    color: brandColorVar,
    wordBreak: 'break-word',
  },
  variants: {
    level: {
      1: { fontSize: '16px' },
      2: { fontSize: '15px' },
      3: { fontSize: '14px' },
      4: { fontSize: '12px' },
    },
  },
  defaultVariants: {
    level: 2,
  },
});
