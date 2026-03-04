import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Vite 설정을 Storybook에 병합
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      optimizeDeps: {
        // React 관련 모듈들을 미리 번들링하도록 강제합니다.
        include: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          '@storybook/blocks',
        ],
      },
    });
  },
};
export default config;
