import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases as aliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    aliases({
      useTypescript: true,
      useConfig: true,
      depth: 2,
      useRelativePaths: true,
    }),
  ],
});
