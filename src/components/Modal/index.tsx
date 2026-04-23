import { ReactNode, useEffect, useState } from 'react';
import * as s from './style.css.ts';
import Flex from '@/components/Layout/Flex';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { createPortal } from 'react-dom';

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  status?: 'default' | 'danger' | 'success';
  width?: string;
  children: ReactNode;
}

// 1. 기본 모달 (Modal)
export const Modal = ({
  isOpen,
  onClose,
  status,
  width,
  children,
}: ModalBaseProps) => {
  // 클라이언트 사이드 렌더링 확인 (Next.js 등 SSR 환경 대응)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      // 모달이 열릴 때 스크롤 방지 (선택 사항)
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div
        className={s.modalContainer({ status })}
        style={{ width: width, maxWidth: width ? width : undefined }}
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫힘 방지
      >
        {children}
      </div>
    </div>,
    document.body, // body 바로 아래에 렌더링
  );
};

interface ContentProps {
  title?: string;
  message: string;
  status?: 'default' | 'danger' | 'success';
  confirmText?: string;
  onClose: () => void;
}

// 2. Alert
export const Alert = ({
  title,
  message,
  status,
  confirmText = '확인',
  onClose,
}: ContentProps) => {
  return (
    <Modal isOpen onClose={onClose} status={status}>
      <Flex direction="column" gap={8}>
        {title && (
          <Typography level={3} weight="bold">
            {title}
          </Typography>
        )}
        <Typography level={5} align="left">
          {message}
        </Typography>
      </Flex>
      <div className={s.modalFooter}>
        <Button
          onClick={onClose}
          color={status === 'default' ? 'primary' : status}
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
};

// 3. Confirm
interface ConfirmProps extends ContentProps {
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

export const Confirm = ({
  title,
  message,
  status,
  onClose,
  onConfirm,
  confirmText = '확인',
  cancelText = '취소',
}: ConfirmProps) => {
  return (
    <Modal isOpen onClose={onClose} status={status}>
      <Flex direction="column" gap={8}>
        {title && (
          <Typography level={3} weight="bold">
            {title}
          </Typography>
        )}
        <Typography level={5} align="left">
          {message}
        </Typography>
      </Flex>
      <div className={s.modalFooter}>
        <Button variant="ghost" color="gray" onClick={onClose}>
          {cancelText}
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          color={status === 'default' ? 'primary' : status}
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
};
