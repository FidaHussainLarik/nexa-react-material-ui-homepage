import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        const isMuiClientDirectiveWarning =
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.message.includes('"use client"') &&
          warning.id?.includes('/node_modules/@mui/');

        if (!isMuiClientDirectiveWarning) {
          warn(warning);
        }
      },
    },
  },
});
