import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
  include: ['test ts/**/*.ts'],
    environment: 'node',
    globals: true,
    allowImportingTsExtensions: true,
  },
});
