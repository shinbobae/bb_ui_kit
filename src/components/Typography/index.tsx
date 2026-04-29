import React, { ReactNode, ElementType } from 'react';
import { black900 } from '@/tokens/colors.ts';
import { brandColorVar, subTitleRecipe } from './style.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// 1. 레벨을 6까지 확장
export type TypographyLevelType = 1 | 2 | 3 | 4 | 5 | 6;

type TypographyProps<T extends ElementType> = {
  as?: T;
  level?: TypographyLevelType;
  color?: string;
  weight?: 400 | 500 | 600 | 700 | 800; // weight 추가
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
} & React.ComponentPropsWithoutRef<T>;

// 2. 레벨에 따른 기본 태그 매핑 (Optional)
const getDefaultTag = (level: TypographyLevelType): ElementType => {
  if (level <= 3) return `h${level}` as ElementType; // 1,2,3 -> h1, h2, h3
  return 'p'; // 4,5,6 -> p
};

const Typography = <T extends ElementType>({
  as,
  level = 4, // 기본값 본문 레벨
  weight,
  color = black900,
  align,
  children,
  style,
  ...props
}: TypographyProps<T>) => {
  // 3. 사용자가 as를 주면 그걸 쓰고, 없으면 레벨에 맞는 기본 태그 선택
  const Component = as || getDefaultTag(level);

  return (
    <Component
      className={subTitleRecipe({ level, weight, align })}
      style={{
        ...assignInlineVars({ [brandColorVar]: color }),
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
