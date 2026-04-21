import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// 1. 오른쪽에서 왼쪽으로 들어오는 애니메이션 정의
const slideInRight = keyframes({
  '0%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});
// 사라질 때
const slideOutRight = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(100%)' },
});

// 2. 배경 오버레이가 투명에서 어두워지는 효과
const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const drawerContainer = style({
  position: 'fixed',
  top: 0,
  right: 0, // 오른쪽 기준
  bottom: 0,
  width: '300px',
  height: '100vh',
  backgroundColor: 'white',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.1)',
  animation: `${slideInRight} 0.3s ease-out`,
});

export const overlayStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 999,
  animation: `${fadeIn} 0.3s ease-out`,
});

export const drawerRecipe = recipe({
  base: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    backgroundColor: 'white',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.1)',
    animation: `${slideInRight} 0.3s ease-out`,
    outline: 'none',
  },
  variants: {
    status: {
      entering: { animation: `${slideInRight} 0.3s forwards` },
      exiting: { animation: `${slideOutRight} 0.3s forwards` },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: '500px', // 기본 너비
        // 모바일 대응: 화면이 500px보다 작아지면 100%로 자동 전환되게 하려면 아래 추가
        '@media': {
          'screen and (max-width: 520px)': {
            width: '100%',
          },
        },
      },
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const headerStyle = style({
  flexShrink: 0,
});

export const contentStyle = style({
  flex: 1, // 남은 전체 높이 차지
  overflowY: 'auto', // 내부 스크롤 활성화
  WebkitOverflowScrolling: 'touch', // 모바일 부드러운 스크롤
});
