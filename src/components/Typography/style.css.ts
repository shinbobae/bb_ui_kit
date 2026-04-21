import { recipe } from '@vanilla-extract/recipes';
import { createVar } from '@vanilla-extract/css';

export const brandColorVar = createVar();

export const subTitleRecipe = recipe({
  base: {
    color: brandColorVar,
    margin: 0,
    wordBreak: 'keep-all',
  },
  variants: {
    level: {
      1: { fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2 }, // h1 급
      2: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }, // h2 급
      3: { fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.4 }, // h3 급
      4: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.5 }, // Body Large / h4
      5: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 }, // Body Medium / h5
      6: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }, // Body Small / h6
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },
  defaultVariants: {
    level: 4, // 기본값을 본문 사이즈로 설정
    align: 'left',
  },
});
