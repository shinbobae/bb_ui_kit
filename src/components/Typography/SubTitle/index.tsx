import React, { ReactNode } from 'react';
import { black900 } from '@/tokens/colors.ts';
import {
  brandColorVar,
  subTitleRecipe,
} from '@/components/Typography/SubTitle/style.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export type SubTitleLevelType = 1 | 2 | 3 | 4;
type SubTitleType = {
  level?: SubTitleLevelType;
  color?: string;
  children: ReactNode;
} & React.ClassAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLParagraphElement>;
const SubTitle = ({ level = 2, color = black900, children }: SubTitleType) => {
  return (
    <strong
      className={subTitleRecipe({ level })}
      style={assignInlineVars({ [brandColorVar]: color })}
    >
      {children}
    </strong>
  );
};

export default SubTitle;
