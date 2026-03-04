import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: path.join(__dirname, '.storybook'),
    }),
  ],
  test: {
    browser: {
      enabled: true,
      // 해결책: 문자열이 아닌 'playwright' 리터럴 타입임을 명시하거나 객체로 전달
      provider: {
        name: 'playwright',
        // 추가 옵션이 필요할 경우 여기에 넣습니다.
      },
      instances: [{ browser: 'chromium' }],
      headless: true,
    },
  },
});
