import React, { createContext, useState, useCallback } from 'react';
import { Alert, Confirm } from '@/components/Modal/index.tsx';

type ModalStatus = 'default' | 'danger' | 'success';

export interface ModalConfig {
  title?: string;
  message: string;
  status?: ModalStatus;
  confirmText?: string;
  cancelText?: string;
}

// 1. 모달의 상태 타입을 정의합니다.
export interface ModalState {
  type: 'alert' | 'confirm' | null;
  config: ModalConfig | null;
  resolve: (value: boolean) => void; // Alert는 void지만 Confirm과 맞추기 위해 boolean으로 통합하거나 분리 가능
}

export interface ModalContextType {
  openAlert: (config: ModalConfig) => Promise<void>;
  openConfirm: (config: ModalConfig) => Promise<boolean>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState>({
    type: null,
    config: null,
    resolve: () => {},
  });

  // Alert: 확인 버튼만 있으므로 결과값은 중요하지 않지만 Promise 흐름을 맞춤
  const openAlert = useCallback((config: ModalConfig) => {
    return new Promise<void>((resolve) => {
      setModalState({
        type: 'alert',
        config,
        resolve: () => resolve(), // void를 반환하도록 감쌈
      });
    });
  }, []);

  // Confirm: 사용자의 선택(true/false)을 반환
  const openConfirm = useCallback((config: ModalConfig) => {
    return new Promise<boolean>((resolve) => {
      setModalState({
        type: 'confirm',
        config,
        resolve, // boolean을 반환
      });
    });
  }, []);

  const closeBox = (result: boolean) => {
    modalState.resolve(result);
    setModalState({ type: null, config: null, resolve: () => {} });
  };

  return (
    <ModalContext.Provider value={{ openAlert, openConfirm }}>
      {children}

      {modalState.type === 'alert' && modalState.config && (
        <Alert {...modalState.config} onClose={() => closeBox(true)} />
      )}

      {modalState.type === 'confirm' && modalState.config && (
        <Confirm
          {...modalState.config}
          onClose={() => closeBox(false)}
          onConfirm={() => closeBox(true)}
        />
      )}
    </ModalContext.Provider>
  );
};
