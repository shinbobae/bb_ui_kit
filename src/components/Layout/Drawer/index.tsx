import React, { useEffect, useRef, useState } from 'react';
import Flex from '@/components/Layout/Flex';
import Portal from '@/components/Portal';
import {
  drawerRecipe,
  contentStyle,
  overlayStyle,
  headerStyle,
} from './style.css.ts';
import { RecipeVariants } from '@vanilla-extract/recipes';

type DrawerVariants = RecipeVariants<typeof drawerRecipe>;

// Drawer.Header
const DrawerHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <Flex className={`${headerStyle} ${className ?? ''}`}>{children}</Flex>;

// Drawer.Body
const DrawerBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <Flex className={`${contentStyle} ${className ?? ''}`}>{children}</Flex>;

export type DrawerPropsType = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
} & DrawerVariants;

// 메인 Drawer 컴포넌트
const DrawerMain = ({
  open,
  onClose,
  children,
  fullWidth,
}: DrawerPropsType) => {
  const [shouldRender, setShouldRender] = useState(open); // 실제로 DOM에 존재할지 여부
  const [animationStatus, setAnimationStatus] = useState<
    'entering' | 'exiting'
  >(open ? 'entering' : 'exiting'); // 애니메이션 상태 (entering / exiting)

  const drawerRef = useRef<HTMLDivElement>(null);
  const touchStartPos = useRef(0);
  const currentTranslateX = useRef(0);

  // start drawer touch handler
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartPos.current = e.touches[0].clientX;
    if (drawerRef.current) {
      drawerRef.current.style.transition = 'none'; // 드래그 중엔 애니메이션 끄기
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const currentPos = e.touches[0].clientX;
    const distance = currentPos - touchStartPos.current;

    // 오른쪽으로 밀 때만 이동 (distance > 0)
    if (distance > 0 && drawerRef.current) {
      currentTranslateX.current = distance;
      drawerRef.current.style.transform = `translateX(${distance}px)`;
    }
  };
  const handleTouchEnd = () => {
    if (!drawerRef.current) return;

    drawerRef.current.style.transition = 'transform 0.3s ease-out'; // 애니메이션 복구
    const threshold = drawerRef.current.offsetWidth * 0.3; // 30% 이상 밀었을 때

    if (currentTranslateX.current > threshold) {
      onClose?.(); // 드로어 닫기 호출
    } else {
      // 제자리로 복구
      drawerRef.current.style.transform = `translateX(0)`;
    }
    currentTranslateX.current = 0;
  };
  // end drawer touch handler

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setAnimationStatus('entering');
      document.body.style.overflow = 'hidden';
    } else {
      setAnimationStatus('exiting');
      // 애니메이션 시간(300ms) 후에 렌더링 종료
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'auto';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!shouldRender) return null;

  return (
    <Portal>
      {open && (
        <div className={overlayStyle} onClick={onClose} aria-hidden="true" />
      )}

      <Flex
        as="aside"
        ref={drawerRef}
        direction="column"
        className={drawerRecipe({
          fullWidth,
          status: animationStatus, // 현재 애니메이션 상태
        })}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </Flex>
    </Portal>
  );
};

// 객체 합성 (Drawer.Header, Drawer.Body로 사용할 수 있게 함)
export const Drawer = Object.assign(DrawerMain, {
  Header: DrawerHeader,
  Body: DrawerBody,
});

export default Drawer;
