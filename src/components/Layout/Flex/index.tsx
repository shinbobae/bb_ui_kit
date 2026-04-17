import React, { ElementType, HTMLAttributes, forwardRef } from 'react';
import { flexRecipe } from './style.css.ts';
import { RecipeVariants } from '@vanilla-extract/recipes';

type FlexVariants = RecipeVariants<typeof flexRecipe>;

type FlexProps = {
  as?: ElementType;
  children?: React.ReactNode;
  gap?: string | number;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  flex?: string | number;
  alignSelf?: React.CSSProperties['alignSelf'];
} & FlexVariants &
  HTMLAttributes<HTMLElement>;

const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      as: Component = 'div',
      children,
      direction,
      justify,
      align,
      wrap,
      fullWidth,
      gap,
      width,
      height,
      padding,
      margin,
      flex,
      alignSelf,
      style,
      ...props
    },
    ref,
  ) => {
    // 인라인 스타일 동적 속성들
    const dynamicStyle: React.CSSProperties = {
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      width,
      height,
      padding,
      margin,
      flex,
      alignSelf,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={flexRecipe({ direction, justify, align, wrap, fullWidth })}
        style={dynamicStyle}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Flex.displayName = 'Flex';

export default Flex;
