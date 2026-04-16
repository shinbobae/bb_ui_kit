import React from 'react';
import { badgeRecipe } from '@/components/Badge/style.css.ts';

export type TagSizeType = 'sm' | 'md' | 'lg';
export type TagVariantType = 'filled' | 'light' | 'outline' | 'ghost' | 'dot';
export type TagColorType =
  | 'blue'
  | 'green'
  | 'mandarin'
  | 'red'
  | 'yellow'
  | 'black'
  | 'gray';

interface BaseBadgeProps {
  size?: TagSizeType;
  color?: TagColorType;
}

type BadgeProps = BaseBadgeProps &
  (
    | {
        variant: 'dot';
        children: string; // dot일 때 string 강제
      }
    | {
        variant?: Exclude<TagVariantType, 'dot'>;
        children: React.ReactNode;
      }
  );

const Badge = (props: BadgeProps) => {
  // 기본값 설정 (props 전체를 참조하여 관계를 유지함)
  const { variant = 'filled', size = 'sm', color = 'blue' } = props;

  if (variant === 'dot') {
    return (
      <span
        className={badgeRecipe({ size, variant, color })}
        role="status"
        // props.children으로 접근하면 TS가 string임을 확실히 압니다.
        aria-label={props.children as string}
      />
    );
  }

  // 여기서 variant는 자동으로 dot이 아닌 타입으로 좁혀집니다.
  return (
    <span className={badgeRecipe({ size, variant, color })}>
      {props.children}
    </span>
  );
};

export default Badge;
