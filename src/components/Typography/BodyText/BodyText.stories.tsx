import type { Meta, StoryObj } from '@storybook/react';
import { black900, blue700 } from '@/tokens/colors.ts';
import BodyText from '@/components/Typography/BodyText/index.tsx';

const meta: Meta<typeof BodyText> = {
  title: 'Components/BodyText',
  component: BodyText,
  tags: ['autodocs'], // 스토리북 8에서 문서화 자동 생성
};

export default meta;
type Story = StoryObj<typeof BodyText>;

// 기본형
export const Default: Story = {
  args: {
    level: 1,
    children:
      '깊은 산 속 옹달샘, 누가 와서 먹나요. 맑고 맑은 옹달샘, 누가 와서 먹나요. 새벽에 토끼가 눈 비비고 일어나 세수하러 왔다가 물만 먹고 가지요.',
    color: black900,
  },
};

// 다양한 레벨 확인용
export const AllLevels: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <BodyText {...args} level={1}>
        Level 1 Text
      </BodyText>
      <BodyText {...args} level={2}>
        Level 2 Text
      </BodyText>
      <BodyText {...args} level={3}>
        Level 3 Text
      </BodyText>
    </div>
  ),
};

// 커스텀 컬러
export const CustomColor: Story = {
  args: {
    level: 2,
    children: '색상이 바뀌었어요',
    color: blue700, // 스토리북 브랜드 컬러 예시
  },
};
