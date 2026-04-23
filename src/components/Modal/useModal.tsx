// useModal.ts 내부에 추가
import { useContext } from 'react';
import { ModalContext } from '@/components/Modal/ModalProvider.tsx';

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal은 ModalProvider 안에서 사용해야 합니다.');
  }
  return context;
};

// 2번 방식: 명시적인 별칭 훅들
export const useAlert = () => {
  const { openAlert } = useModal();
  return openAlert;
};

export const useConfirm = () => {
  const { openConfirm } = useModal();
  return openConfirm;
};
