import React, { ElementType, HTMLAttributes } from 'react';
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
  Omit<HTMLAttributes<HTMLElement>, 'color' | 'width' | 'height'>;

const Flex = ({
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
}: FlexProps) => {
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
      className={flexRecipe({ direction, justify, align, wrap, fullWidth })}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </Component>
  );
};

Flex.displayName = 'Flex';

export default Flex;
