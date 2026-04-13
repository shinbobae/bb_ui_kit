import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const brandColorVar = createVar();
export const headlineRecipe = recipe({
  // 공통
  base: {
    fontWeight: 600,
    lineHeight: '150%',
    color: brandColorVar,
    wordBreak: 'break-word',
  },
  variants: {
    level: {
      1: { fontSize: '60px' },
      2: { fontSize: '40px' },
      3: { fontSize: '28px' },
      4: { fontSize: '24px' },
      5: { fontSize: '20px' },
      6: { fontSize: '18px' },
    },
  },
  defaultVariants: {
    level: 6,
  },
});
