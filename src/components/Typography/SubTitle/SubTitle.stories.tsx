import type { Meta, StoryObj } from '@storybook/react';
import SubTitle from '@/components/Typography/SubTitle/index.tsx';
import { black900 } from '@/tokens/colors.ts';
const meta: Meta<typeof SubTitle> = {
  title: 'Components/SubTitle',
  component: SubTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubTitle>;

export const Default: Story = {
  args: {
    level: 1,
    children: '서서서서브타이틀 strong 태그에요',
    color: black900,
  },
};

export const AllLevels: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SubTitle {...args} level={1}>
        Level 1 Sub Title
      </SubTitle>
      <SubTitle {...args} level={2}>
        Level 2 Sub Title
      </SubTitle>
      <SubTitle {...args} level={3}>
        Level 3 Sub Title
      </SubTitle>
      <SubTitle {...args} level={4}>
        Level 4 Sub Title
      </SubTitle>
    </div>
  ),
};
