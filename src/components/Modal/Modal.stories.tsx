import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Modal } from '@/components/Modal/index.tsx';
import { useAlert, useModal } from '@/components/Modal/useModal.tsx';
import Flex from '@/components/Layout/Flex';
import Button from '@/components/Button';
import { useState } from 'react';
import Typography from '@/components/Typography';
import Badge from '@/components/Badge';

const meta: Meta<typeof Alert> = {
  title: 'Components/Modal',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // 스토리북 전역 설정 fullscreen: 캔버스 끝까지 적용
  },
};

export default meta;

/**
 * 1. 기본 Alert 컴포넌트 형태
 */
export const Default: StoryObj<typeof Alert> = {
  args: {
    title: '안내',
    message: '이야아아아아아아아아 칸쵸',
  },
  render: (args) => {
    const openAlert = useAlert();
    const handleClick = async () => {
      await openAlert({
        ...args,
      });
    };
    return (
      <Flex padding="2rem" justify="center">
        <Button onClick={handleClick}>alert</Button>
      </Flex>
    );
  },
};

export const AlertFunction = {
  render: () => {
    const { openAlert } = useModal();

    const handleAlert = async () => {
      await openAlert({
        title: '알림',
        message: 'openAlert() 함수로 실행되었습니다.',
      });
      console.log('알림창 닫힘');
    };
    const handleSuccessAlert = async () => {
      await openAlert({
        title: '성공 알림',
        message: 'openAlert() 함수로 실행되었습니다.',
        status: 'success',
      });
      console.log('알림창 닫힘');
    };
    const handleDangerAlert = async () => {
      await openAlert({
        title: '위험 알림',
        message: 'openAlert() 함수로 실행되었습니다.',
        status: 'danger',
      });
      console.log('알림창 닫힘');
    };
    return (
      <Flex gap={12} padding="2rem">
        <Button variant="ghost" onClick={handleAlert}>
          Alert 띄우기
        </Button>
        <Button variant="ghost" onClick={handleSuccessAlert} color="success">
          Alert 띄우기
        </Button>
        <Button variant="ghost" onClick={handleDangerAlert} color="danger">
          Alert 띄우기
        </Button>
      </Flex>
    );
  },
};

export const ConfirmFunction = {
  render: () => {
    const { openAlert, openConfirm } = useModal();

    const handleConfirm = async () => {
      await openConfirm({
        title: '저장',
        message: '내용이 맞나요',
        confirmText: '맞아요',
        cancelText: '아니에요',
      });
      console.log('알림창 닫힘');
    };

    const handleDangerConfirm = async () => {
      const result = await openConfirm({
        title: '삭제',
        message: '정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
        status: 'danger',
        confirmText: '삭제하기',
        cancelText: '취소',
      });

      if (result) {
        await openAlert({ message: '삭제되었습니다.' });
      } else {
        await openAlert({ message: '취소되었습니다.' });
      }
    };

    return (
      <Flex gap={12} padding="2rem">
        <Button variant="ghost" onClick={handleConfirm}>
          Confirm 띄우기
        </Button>
        <Button variant="ghost" onClick={handleDangerConfirm} color="danger">
          Confirm 띄우기
        </Button>
      </Flex>
    );
  },
};

export const StateModal = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBigOpen, setIsBigOpen] = useState(false);
    return (
      <Flex padding="2rem" gap={16}>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          모달열기
        </Button>
        <Button variant="outline" onClick={() => setIsBigOpen(true)}>
          큰모달열기
        </Button>

        {/* 기본사이즈 */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Flex gap={16}>
            <Typography>엘리먼트들 넣어서 커스텀 하세요~</Typography>
          </Flex>
          <Flex
            direction="column"
            gap={160}
            style={{ overflowY: 'auto', maxHeight: '300px' }}
          >
            <Badge size="lg">그니까말이야</Badge>
            <Badge color="green" size="lg">
              그러니까말이야
            </Badge>
            <Badge color="mandarin" size="lg">
              그러게말이야
            </Badge>
          </Flex>
          <Flex gap={16} justify="flex-end">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              빠이
            </Button>
          </Flex>
        </Modal>
        {/* 기본사이즈 */}
        {/* 큰너비 */}
        <Modal
          isOpen={isBigOpen}
          width="700px"
          onClose={() => setIsBigOpen(false)}
        >
          <Flex gap={16}>
            <Typography level={3}>🤦‍♀️🤦‍♀️🤦‍♀️좀 커요</Typography>
          </Flex>
          <Flex
            direction="column"
            gap={160}
            style={{ overflowY: 'auto', maxHeight: '300px' }}
          >
            <Badge size="lg">그니까말이야</Badge>
            <Badge color="green" size="lg">
              그러니까말이야
            </Badge>
            <Badge color="mandarin" size="lg">
              그러게말이야
            </Badge>
          </Flex>
          <Flex gap={16} justify="flex-end">
            <Button variant="outline" onClick={() => setIsBigOpen(false)}>
              빠이
            </Button>
          </Flex>
        </Modal>
        {/* 큰너비 */}
      </Flex>
    );
  },
};
