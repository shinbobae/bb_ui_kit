import type { Meta, StoryObj } from '@storybook/react';
import Divider from './index';
import Flex from '../Flex'; // 아까 만든 Flex 활용!

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

// 1. 기본 가로형
export const Horizontal: Story = {
  render: () => (
    <div>
      <p>상단 콘텐츠</p>
      <Divider orientation="horizontal" />
      <p>하단 콘텐츠</p>
    </div>
  ),
};

// 2. 세로형 (Flex와 조합)
export const Vertical: Story = {
  render: () => (
    <Flex align="center" gap={8} height="24px">
      <span>메뉴 1</span>
      <Divider orientation="vertical" />
      <span>메뉴 2</span>
      <Divider orientation="vertical" />
      <span>메뉴 3</span>
    </Flex>
  ),
};
