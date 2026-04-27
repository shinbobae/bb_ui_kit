import { recipe } from '@vanilla-extract/recipes';
import {
  black0,
  black100,
  black300,
  black400,
  black50,
  black500,
  black600,
  blue100,
  blue400,
  blue50,
  blue500,
  blue600,
  green100,
  green400,
  green50,
  green500,
  green600,
  red100,
  red400,
  red50,
  red500,
  red600,
} from '@/tokens/colors.ts';

const colors = {
  primary: {
    base: blue500,
    hover: blue400,
    active: blue600,
    hoverLight: blue50,
    activeLight: blue100,
    text: black0,
  },
  danger: {
    base: red500,
    hover: red400,
    active: red600,
    hoverLight: red50,
    activeLight: red100,
    text: black0,
  },
  success: {
    base: green500,
    hover: green400,
    active: green600,
    hoverLight: green50,
    activeLight: green100,
    text: black0,
  },
  gray: {
    base: black400,
    hover: black300,
    active: black500,
    hoverLight: black50,
    activeLight: black100,
    text: black0,
  },
};

export const buttonRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '1px solid transparent', // 테두리 기본값 설정
    transition: 'all 0.2s ease-in-out',
    fontWeight: 600,
    gap: '8px',
    ':disabled': { cursor: 'not-allowed', opacity: 0.5 },
  },
  variants: {
    // 1. 색상 기본값 정의 (배경/글자색)
    color: {
      primary: {},
      danger: {},
      success: {},
      gray: {},
    },
    variant: {
      solid: {},
      outline: { backgroundColor: 'transparent' },
      ghost: { backgroundColor: 'transparent', borderColor: 'transparent' },
    },
    size: {
      sm: { height: '32px', padding: '0 12px' },
      md: { height: '40px', padding: '0 16px' },
      lg: { height: '48px', padding: '0 24px' },
    },
    fullWidth: { true: { width: '100%' } },
  },
  // 💡 Compound Variants
  compoundVariants: [
    // primary blue
    {
      variants: { color: 'primary', variant: 'solid' },
      style: {
        backgroundColor: colors.primary.base,
        color: colors.primary.text,
        ':hover': { backgroundColor: colors.primary.hover },
        ':active': { backgroundColor: colors.primary.active },
      },
    },
    {
      variants: { color: 'primary', variant: 'outline' },
      style: {
        color: colors.primary.base,
        borderColor: colors.primary.base,
        ':hover': { backgroundColor: colors.primary.hoverLight },
        ':active': { backgroundColor: colors.primary.activeLight },
      },
    },
    {
      variants: { color: 'primary', variant: 'ghost' },
      style: {
        color: colors.primary.base,
        borderColor: 'transparent',
        ':hover': { backgroundColor: colors.primary.hoverLight },
        ':active': { backgroundColor: colors.primary.activeLight },
      },
    },
    // danger red
    {
      variants: { color: 'danger', variant: 'solid' },
      style: {
        backgroundColor: colors.danger.base,
        color: colors.danger.text,
        ':hover': { backgroundColor: colors.danger.hover },
        ':active': { backgroundColor: colors.danger.active },
      },
    },
    {
      variants: { color: 'danger', variant: 'outline' },
      style: {
        color: colors.danger.base,
        borderColor: colors.danger.base,
        ':hover': { backgroundColor: colors.danger.hoverLight },
        ':active': { backgroundColor: colors.danger.activeLight },
      },
    },
    {
      variants: { color: 'danger', variant: 'ghost' },
      style: {
        color: colors.danger.base,
        borderColor: 'transparent',
        ':hover': { backgroundColor: colors.danger.hoverLight },
        ':active': { backgroundColor: colors.danger.activeLight },
      },
    },
    // success green
    {
      variants: { color: 'success', variant: 'solid' },
      style: {
        backgroundColor: colors.success.base,
        color: colors.success.text,
        ':hover': { backgroundColor: colors.success.hover },
        ':active': { backgroundColor: colors.success.active },
      },
    },
    {
      variants: { color: 'success', variant: 'outline' },
      style: {
        color: colors.success.base,
        borderColor: colors.success.base,
        ':hover': { backgroundColor: colors.success.hoverLight },
        ':active': { backgroundColor: colors.success.activeLight },
      },
    },
    {
      variants: { color: 'success', variant: 'ghost' },
      style: {
        color: colors.success.base,
        borderColor: 'transparent',
        ':hover': { backgroundColor: colors.success.hoverLight },
        ':active': { backgroundColor: colors.success.activeLight },
      },
    },
    // gray
    {
      variants: { color: 'gray', variant: 'solid' },
      style: {
        backgroundColor: colors.gray.base,
        color: colors.gray.text,
        ':hover': { backgroundColor: colors.gray.hover },
        ':active': { backgroundColor: colors.gray.active },
      },
    },
    {
      variants: { color: 'gray', variant: 'outline' },
      style: {
        color: black600,
        borderColor: black600,
        ':hover': { backgroundColor: colors.gray.hoverLight },
        ':active': { backgroundColor: colors.gray.activeLight },
      },
    },
    {
      variants: { color: 'gray', variant: 'ghost' },
      style: {
        color: black600,
        borderColor: 'transparent',
        ':hover': { backgroundColor: colors.gray.hoverLight },
        ':active': { backgroundColor: colors.gray.activeLight },
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
  },
});
