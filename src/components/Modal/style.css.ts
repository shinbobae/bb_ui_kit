import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// 모달 외부 배경 (Overlay)
export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

// 모달 컨테이너
export const modalContainer = recipe({
  base: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    width: '90%',
    minWidth: '320px',
    maxWidth: '360px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    overflow: 'hidden',
  },
  variants: {
    status: {
      default: {},
      danger: {},
      success: {},
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  marginTop: '8px',
});
