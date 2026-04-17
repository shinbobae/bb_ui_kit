import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const flexBase = style({
  display: 'flex',
  boxSizing: 'border-box',
});

export const flexRecipe = recipe({
  base: flexBase,
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      'row-reverse': { flexDirection: 'row-reverse' },
      'column-reverse': { flexDirection: 'column-reverse' },
    },
    justify: {
      'flex-start': { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      'flex-end': { justifyContent: 'flex-end' },
      'space-between': { justifyContent: 'space-between' },
      'space-around': { justifyContent: 'space-around' },
      'space-evenly': { justifyContent: 'space-evenly' },
    },
    align: {
      start: { alignItems: 'start' },
      end: { alignItems: 'end' },
      center: { alignItems: 'center' },
      stretch: { alignItems: 'stretch' },
      'flex-start': { alignItems: 'flex-start' },
      'flex-end': { alignItems: 'flex-end' },
    },
    wrap: {
      nowrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'nowrap',
  },
});
