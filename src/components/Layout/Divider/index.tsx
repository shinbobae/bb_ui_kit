import React from 'react';
import { dividerRecipe } from './style.css.ts';
import { RecipeVariants } from '@vanilla-extract/recipes';

type DividerVariants = RecipeVariants<typeof dividerRecipe>;

type DividerProps = DividerVariants & {
  className?: string;
  style?: React.CSSProperties;
};

const Divider = ({
  orientation = 'horizontal',
  className,
  style,
}: DividerProps) => {
  return (
    <div
      className={`${dividerRecipe({ orientation })} ${className ?? ''}`}
      style={style}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

export default Divider;
