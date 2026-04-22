import React from 'react';
import { buttonRecipe } from './style.css.ts';
import { RecipeVariants } from '@vanilla-extract/recipes';
import Typography from '../Typography'; // 앞서 만든 Typography 가져오기

type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

const Button = ({
  children,
  color = 'primary',
  variant = 'solid',
  size = 'md',
  fullWidth,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) => {
  // 버튼 사이즈에 맞는 Typography 레벨 매칭
  const getTypographyLevel = () => {
    if (size === 'sm') return 6;
    if (size === 'lg') return 4;
    return 5; // md
  };

  return (
    <button
      className={`${buttonRecipe({ color, variant, size, fullWidth })} ${className ?? ''}`}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}

      <Typography
        as="span"
        level={getTypographyLevel()}
        color="inherit" // 버튼의 글자색을 따르도록 설정
        style={{ fontWeight: 'inherit' }}
      >
        {children}
      </Typography>

      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
