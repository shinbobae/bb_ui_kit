import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Badge, Divider, Flex } from '@/index.ts';
import { Drawer } from '@/components/Drawer/index.tsx';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Feedback/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // 스토리북 전역 설정 fullscreen: 캔버스 끝까지 적용
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args: Story['args']) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setIsOpen(true)}>드로어 열기</button>

        <Drawer {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <Drawer.Header>
            <Flex justify="space-between" align="center" padding="16px 24px">
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                프로필 설정
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                }}
              >
                ✕
              </button>
            </Flex>
            <Divider />
          </Drawer.Header>

          <Drawer.Body>
            <Flex direction="column" gap={20} padding="24px">
              <section>
                <h4 style={{ marginBottom: '8px' }}>내 계정</h4>
                <Flex align="center" gap={12}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#eee',
                    }}
                  />
                  <div>
                    <p style={{ fontWeight: '600' }}>Gemini Developer</p>
                    <p style={{ fontSize: '12px', color: '#666' }}>
                      developer@example.com
                    </p>
                  </div>
                </Flex>
              </section>

              <Divider />

              <section>
                <h4 style={{ marginBottom: '12px' }}>흐리다</h4>
                <Flex direction="column" gap={8}>
                  <Badge color="blue">아무거나</Badge>
                  <Badge color="green">써봐</Badge>
                </Flex>
              </section>

              <section>
                <h4 style={{ marginBottom: '12px' }}>쓸 말이 없긴 해</h4>
                <div
                  style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}
                >
                  {Array.from({ length: 25 }).map((_, i) => (
                    <p key={i}>
                      이 부분은 Drawer.Body 내부에서 스크롤되는 영역입니다.{' '}
                      {i + 1}번째 줄입니다.
                    </p>
                  ))}
                </div>
              </section>
            </Flex>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  },
  args: {
    fullWidth: false,
  },
};

export const FullScreenDrawer: Story = {
  render: (args: Story['args']) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setIsOpen(true)}>전체 화면</button>

        <Drawer
          {...args}
          fullWidth
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Drawer.Header>
            <Flex
              align="center"
              justify="space-between"
              padding="16px"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{ marginRight: '12px' }}
              >
                뒤로
              </button>
              <h2 style={{ fontSize: '18px' }}>전체 화면 콘텐츠</h2>
            </Flex>
          </Drawer.Header>

          <Drawer.Body>
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="100%"
              gap={20}
            >
              <h1>전체</h1>
              <p>전체 화면으로</p>
              <button onClick={() => setIsOpen(false)}>메뉴 닫기</button>
            </Flex>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  },
};
