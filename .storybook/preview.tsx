import '../src/style/reset.css.ts';
import '../src/style/theme.css.ts';
import { Preview } from '@storybook/react';
import { ModalProvider } from '@/components/Modal/ModalProvider.tsx';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // Introduction 섹션을 가장 먼저 보여주도록 설정
      storySort: {
        order: ['Intro', 'Components', '*'],
      },
    },
  },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
};

export default preview;
