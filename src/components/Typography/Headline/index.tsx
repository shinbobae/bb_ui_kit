import React, { JSX, ReactNode } from 'react';
import { headlineRecipe, brandColorVar } from './style.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { black900 } from '@/tokens/colors.ts';

export type HeadlineLevelType = 1 | 2 | 3 | 4 | 5 | 6;
type HeadlineType = {
  level: HeadlineLevelType;
  color?: string;
  children: ReactNode;
} & React.ClassAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLHeadingElement>;

const Headline = ({ level = 6, color = black900, children }: HeadlineType) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={headlineRecipe({ level })}
      style={assignInlineVars({ [brandColorVar]: color })}
    >
      {children}
    </Tag>
  );
};

export default Headline;
