import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/main.js',
        background: '/background.js',
      },
    },
  },
});

