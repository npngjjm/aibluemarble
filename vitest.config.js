import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        include: ['test ts/test.ts'],
        environment: 'node',
        globals: true,
        // allowImportingTsExtensions: true,
    },
});
//# sourceMappingURL=vitest.config.js.map