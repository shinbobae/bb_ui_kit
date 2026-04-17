import type { Meta, StoryObj } from '@storybook/react';
import Flex from './index.tsx';
import Badge from '@/components/Badge';
import Divider from '@/components/Layout/Divider';
import SubTitle from '@/components/Typography/SubTitle';
import BodyText from '@/components/Typography/BodyText';

const meta: Meta<typeof Flex> = {
  title: 'Components/Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch'],
    },
    gap: {
      control: 'text',
      description: '숫자(px) 또는 문자열(1rem 등)을 입력하세요.',
    },
    as: {
      control: 'text',
      description: '렌더링할 HTML 태그를 지정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

// 1. 기본 레이아웃 (뱃지 나열)
export const Default: Story = {
  args: {
    direction: 'row',
    justify: 'flex-start',
    align: 'center',
    gap: 12,
    children: (
      <>
        <Badge color="blue">Primary</Badge>
        <Badge color="green">Success</Badge>
        <Badge color="red">Danger</Badge>
      </>
    ),
  },
};

// 2. 세로 정렬 (Column)
export const Vertical: Story = {
  args: {
    direction: 'column',
    gap: 8,
    children: (
      <>
        <Badge variant="outline">Item 1</Badge>
        <Badge variant="outline">Item 2</Badge>
        <Badge variant="outline">Item 3</Badge>
      </>
    ),
  },
};

// 3. 중앙 정렬 (Center)
export const Center: Story = {
  args: {
    justify: 'center',
    align: 'center',
    height: '200px',
    style: { backgroundColor: '#f5f5f5', borderRadius: '8px' },
    children: (
      <Badge variant="dot" color="mandarin">
        Centered Dot
      </Badge>
    ),
  },
};

// 4. 시맨틱 태그 활용 (Polymorphic)
export const ListExample: Story = {
  render: (args) => (
    <Flex {...args}>
      <Flex as="li" fullWidth justify="space-between">
        <Flex gap={8}>
          <Badge variant="light" color="red">
            모두 이걸 보세요
          </Badge>
          <SubTitle>위에 고정 공지 목록 하면 이런거 많이 쓰니까</SubTitle>
        </Flex>
        <BodyText level={3}>2026.04.17</BodyText>
      </Flex>
      <Divider />
      <Flex as="li" fullWidth justify="space-between">
        <Flex gap={8}>
          <Badge variant="light" color="gray">
            원피스
          </Badge>
          <SubTitle>내 어린 시절 우연히 들었던 믿지 못할 한 마디</SubTitle>
        </Flex>
        <BodyText level={3}>2026.04.17</BodyText>
      </Flex>
      <Divider />
      <Flex as="li" fullWidth justify="space-between">
        <Flex gap={8}>
          <Badge variant="light" color="gray">
            꼬마버스 타요
          </Badge>
          <SubTitle>타요타요 타요타요 개구쟁이 꼬마버스</SubTitle>
        </Flex>
        <BodyText level={3}>2026.04.17</BodyText>
      </Flex>
      <Divider />
    </Flex>
  ),
  args: {
    as: 'ul',
    direction: 'column',
    gap: 12,
  },
};
