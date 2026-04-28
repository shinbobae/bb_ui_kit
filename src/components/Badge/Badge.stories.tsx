import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';
import Flex from '@/components/Layout/Flex';

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

export const ColorVariants: Story = {
  args: {
    variant: 'filled',
    children: 'Badge',
  },
  render: (args) => (
    <Flex gap={16} direction="column">
      <Flex gap={16}>
        <Badge {...args} />
        <Badge {...args} variant="light" />
        <Badge {...args} variant="outline" />
        <Badge {...args} variant="ghost" />
      </Flex>
      <Flex gap={16}>
        <Badge {...args} color="green" />
        <Badge {...args} variant="light" color="green" />
        <Badge {...args} variant="outline" color="green" />
        <Badge {...args} variant="ghost" color="green" />
      </Flex>
      <Flex gap={16}>
        <Badge {...args} color="red" />
        <Badge {...args} variant="light" color="red" />
        <Badge {...args} variant="outline" color="red" />
        <Badge {...args} variant="ghost" color="red" />
      </Flex>
      <Flex gap={16}>
        <Badge {...args} color="mandarin" />
        <Badge {...args} variant="light" color="mandarin" />
        <Badge {...args} variant="outline" color="mandarin" />
        <Badge {...args} variant="ghost" color="mandarin" />
      </Flex>
      <Flex gap={16}>
        <Badge {...args} color="yellow" />
        <Badge {...args} variant="light" color="yellow" />
        <Badge {...args} variant="outline" color="yellow" />
        <Badge {...args} variant="ghost" color="yellow" />
      </Flex>
    </Flex>
  ),
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: '이것은!', // dot일 때는 string만 허용됨
  },
  render: (args) => (
    <Flex gap={16}>
      <Badge {...args} color="blue" />
      <Badge {...args} color="green" />
      <Badge {...args} color="red" />
      <Badge {...args} color="mandarin" />
      <Badge {...args} color="yellow" />
    </Flex>
  ),
};
