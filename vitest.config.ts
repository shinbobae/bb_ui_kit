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
      provider: 'playwright' as never,
      instances: [{ browser: 'chromium' }],
      headless: true,
    },
  },
});
