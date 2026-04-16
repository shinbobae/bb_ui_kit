import { recipe } from '@vanilla-extract/recipes';
import {
  black0,
  black300,
  black600,
  black900,
  blue100,
  blue600,
  green100,
  green600,
  mandarin100,
  mandarin600,
  red100,
  red600,
  yellow100,
  yellow600,
} from '@/tokens/colors.ts';
import { TagColorType } from '@/components/Badge/index.tsx';

const colorThemes: Record<TagColorType, { main: string; light: string }> = {
  blue: { main: blue600, light: blue100 },
  green: { main: green600, light: green100 },
  mandarin: { main: mandarin600, light: mandarin100 },
  red: { main: red600, light: red100 },
  yellow: { main: yellow600, light: yellow100 },
  black: { main: black900, light: black300 },
  gray: { main: black600, light: blue100 },
};

const createColorVariants = (colorName: TagColorType) => {
  const theme = colorThemes[colorName];
  return [
    {
      variants: { variant: 'filled', color: colorName } as const,
      style: { backgroundColor: theme.main, color: black0 },
    },
    {
      variants: { variant: 'light', color: colorName } as const,
      style: {
        backgroundColor: theme.light,
        color: theme.main, // 배경은 연하게, 글자는 진하게
      },
    },
    {
      variants: { variant: 'outline', color: colorName } as const,
      style: {
        backgroundColor: black0,
        color: theme.main,
        borderColor: theme.main,
      },
    },
    {
      variants: { variant: 'ghost', color: colorName } as const,
      style: { backgroundColor: black0, color: theme.main },
    },
    {
      variants: { variant: 'dot', color: colorName } as const,
      style: { backgroundColor: theme.main },
    },
  ];
};

export const badgeRecipe = recipe({
  base: {
    fontWeight: 400,
    lineHeight: '150%',
    borderRadius: '4px',
    border: '1px solid transparent',
    boxSizing: 'border-box',
  },
  variants: {
    size: {
      sm: { padding: '3px 7px', fontSize: '12px' },
      md: { padding: '4px 8px', fontSize: '14px' },
      lg: { padding: '6px 12px', fontSize: '15px' },
    },
    variant: {
      filled: {},
      outline: {},
      ghost: {},
      dot: {
        display: 'inline-flex',
        borderRadius: '50%',
        padding: 0,
        width: '8px',
        height: '8px',
        minWidth: '8px',
        border: 'none', // dot일 때는 테두리 제거
      },
      light: {},
    },
    color: {
      blue: {},
      green: {},
      mandarin: {},
      red: {},
      yellow: {},
      black: {},
      white: {},
      gray: {},
    },
  },
  compoundVariants: (Object.keys(colorThemes) as TagColorType[]).flatMap(
    (colorName) => createColorVariants(colorName),
  ),
});
