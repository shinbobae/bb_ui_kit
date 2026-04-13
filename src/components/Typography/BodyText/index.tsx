import { black900 } from '@/tokens/colors.ts';
import React, { ReactNode } from 'react';
import {
  brandColorVar,
  subTitleRecipe,
} from '@/components/Typography/BodyText/style.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export type BodyTextLevelType = 1 | 2 | 3;
type BodyTextType = {
  level: BodyTextLevelType;
  color?: string;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
} & React.ClassAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLParagraphElement>;

const BodyText = ({
  level,
  color = black900,
  align,
  children,
}: BodyTextType) => {
  return (
    <p
      className={subTitleRecipe({ level, align })}
      style={assignInlineVars({ [brandColorVar]: color })}
    >
      {children}
    </p>
  );
};

export default BodyText;
