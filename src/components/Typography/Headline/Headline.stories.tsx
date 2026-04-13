import type { Meta, StoryObj } from '@storybook/react';
import Headline from '@/components/Typography/Headline/index.tsx';
import { black900, blue700 } from '@/tokens/colors.ts';

const meta: Meta<typeof Headline> = {
  title: 'Components/Headline',
  component: Headline,
  tags: ['autodocs'], // 스토리북 8에서 문서화 자동 생성
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Headline>;

// 기본형
export const Default: Story = {
  args: {
    level: 1,
    children: '헤헤헤헤드라인',
    color: black900,
  },
};

// 다양한 레벨 확인용
export const AllLevels: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Headline {...args} level={1}>
        Level 1 Headline
      </Headline>
      <Headline {...args} level={2}>
        Level 2 Headline
      </Headline>
      <Headline {...args} level={3}>
        Level 3 Headline
      </Headline>
      <Headline {...args} level={4}>
        Level 4 Headline
      </Headline>
      <Headline {...args} level={5}>
        Level 5 Headline
      </Headline>
      <Headline {...args} level={6}>
        Level 6 Headline
      </Headline>
    </div>
  ),
};

// 커스텀 컬러
export const CustomColor: Story = {
  args: {
    level: 2,
    children: '색상이 변경된 헤드라인',
    color: blue700, // 스토리북 브랜드 컬러 예시
  },
};
