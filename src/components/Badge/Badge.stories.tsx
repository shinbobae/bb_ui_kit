import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['filled', 'light', 'outline', 'ghost', 'dot'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'filled', // variant를 명시하면 에러가 나지 않습니다.
    children: 'BADGE',
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: '이것은!', // dot일 때는 string만 허용됨
  },
};
