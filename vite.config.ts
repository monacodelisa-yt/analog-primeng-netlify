/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
    // did nothing
    cssCodeSplit: true,
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
    css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src'],
        additionalData: `@import "src/dark.scss";
                         @import "src/light.scss";`,
      },
    }
  },
  // does nothing they were in the public folder not compiled
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "src/dark.scss";
  //                        @import "src/light.scss";`,
  //     },
  //   }
  // },
}));
