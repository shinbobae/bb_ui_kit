import type { Meta, StoryObj } from '@storybook/react';
import Typography from './index';
import Flex from '../Layout/Flex';
import { colors } from '@/tokens/colors.ts';

const meta: Meta<typeof Typography> = {
  title: 'Components/Server/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: '텍스트의 위계(사이즈 및 굵기)를 결정합니다.',
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      description: '렌더링될 HTML 태그를 지정합니다.',
    },
    align: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
      description: 'inline 태그라도 align 적용되면 block 태그처럼 작동됩니다.',
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// 1. 모든 레벨 한눈에 보기
export const AllLevels: Story = {
  render: (args) => (
    <Flex direction="column" gap={20}>
      <Typography {...args} level={1}>
        Level 1 - Headline (H1)
      </Typography>
      <Typography {...args} level={2}>
        Level 2 - Headline (H2)
      </Typography>
      <Typography {...args} level={3}>
        Level 3 - Headline (H3)
      </Typography>
      <Typography {...args} level={4}>
        Level 4 - Body Large (P)
      </Typography>
      <Typography {...args} level={5}>
        Level 5 - Body Medium (P)
      </Typography>
      <Typography {...args} level={6}>
        Level 6 - Body Small (P)
      </Typography>
    </Flex>
  ),
};

// 2. 태그 변경 테스트 (Polymorphic)
export const CustomTag: Story = {
  args: {
    level: 2,
    as: 'span',
    children: '저는 Level 2 스타일이지만 span 태그입니다.',
  },
};

// 3. 정렬 테스트
export const Alignment: Story = {
  render: () => (
    <Flex direction="column" gap={16} fullWidth>
      <Typography level={3} align="left">
        Left Aligned Title
      </Typography>
      <Typography level={4} align="center">
        Center Aligned Body Text
      </Typography>
      <Typography level={5} align="right">
        Right Aligned Caption
      </Typography>
    </Flex>
  ),
};

// 4. 컬러 커스텀 테스트
export const Colored: Story = {
  args: {
    level: 3,
    children: '동해물과 백두산이',
  },
  render: (args) => {
    const depths = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
    return (
      <Flex fullWidth gap={16}>
        <div className="flex-1">
          {depths.map((depth) => (
            <Typography {...args} color={colors.blue[depth]} key={depth} />
          ))}
        </div>
        <div className="flex-1">
          {depths.map((depth) => (
            <Typography {...args} color={colors.green[depth]} key={depth} />
          ))}
        </div>
        <div className="flex-1">
          {depths.map((depth) => (
            <Typography {...args} color={colors.red[depth]} key={depth} />
          ))}
        </div>
        <div className="flex-1">
          {depths.map((depth) => (
            <Typography {...args} color={colors.mandarin[depth]} key={depth} />
          ))}
        </div>
        <div className="flex-1">
          {depths.map((depth) => (
            <Typography {...args} color={colors.yellow[depth]} key={depth} />
          ))}
        </div>
        <div className="flex-1">
          {depths.map((depth) => (
            <Typography {...args} color={colors.black[depth]} key={depth} />
          ))}
        </div>
      </Flex>
    );
  },
};
