import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import Flex from '../Layout/Flex';

const meta: Meta<typeof Button> = {
  title: 'Components/General/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'gray'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    children: 'button',
  },
};

export const Variant: Story = {
  args: {
    children: '버튼',
  },
  render: (args: Story['args']) => (
    <Flex gap={32} direction="column">
      <Flex gap={16}>
        <Flex gap={16}>
          <Button {...args} />
          <Button {...args} variant="outline" />
          <Button {...args} variant="ghost" />
          <Button {...args} disabled />
          <Button {...args} disabled variant="outline" />
          <Button {...args} disabled variant="ghost" />
        </Flex>
      </Flex>
      <Flex gap={16}>
        <Flex gap={16}>
          <Button {...args} color="danger" />
          <Button {...args} variant="outline" color="danger" />
          <Button {...args} variant="ghost" color="danger" />
          <Button {...args} disabled color="danger" />
          <Button {...args} disabled variant="outline" color="danger" />
          <Button {...args} disabled variant="ghost" color="danger" />
        </Flex>
      </Flex>
      <Flex gap={16}>
        <Flex gap={16}>
          <Button {...args} color="success" />
          <Button {...args} variant="outline" color="success" />
          <Button {...args} variant="ghost" color="success" />
          <Button {...args} disabled color="success" />
          <Button {...args} disabled variant="outline" color="success" />
          <Button {...args} disabled variant="ghost" color="success" />
        </Flex>
      </Flex>
      <Flex gap={16}>
        <Flex gap={16}>
          <Button {...args} color="gray" />
          <Button {...args} variant="outline" color="gray" />
          <Button {...args} variant="ghost" color="gray" />
          <Button {...args} disabled color="gray" />
          <Button {...args} disabled variant="outline" color="gray" />
          <Button {...args} disabled variant="ghost" color="gray" />
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={12}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Flex>
  ),
};

export const Etc: Story = {
  render: () => (
    <Flex gap={12}>
      <Button disabled>퇴근</Button>
      <Button leftIcon="🚀">슝</Button>
    </Flex>
  ),
};
