import '../src/style/reset.css.ts';
import '../src/style/theme.css.ts';
import { Preview } from '@storybook/react';

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
};

export default preview;
