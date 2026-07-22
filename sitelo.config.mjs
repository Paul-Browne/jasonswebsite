import { defineConfig } from 'vite';
import htmlPages from 'vite-plugin-html-pages';

export default defineConfig({
  plugins: [
    htmlPages({
      pagesDir: 'src',
      cleanUrls: true,
      debug: false
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: 'public',
  },
  publicDir: 'static',
  server: {
    port: 8888
  },
});
