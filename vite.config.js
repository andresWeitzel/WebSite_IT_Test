import { defineConfig } from 'vite';
import { readdirSync } from 'fs';
import { resolve } from 'path';

const htmlDir = resolve(__dirname, 'html');
const legacyPages = Object.fromEntries(
  readdirSync(htmlDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(htmlDir, file)])
);

export default defineConfig({
  publicDir: 'public',
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...legacyPages,
      },
    },
  },
});
