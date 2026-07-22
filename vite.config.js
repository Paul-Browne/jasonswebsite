import { defineConfig } from 'vite'
export default defineConfig({
  publicDir: 'static',
  build: {
    emptyOutDir: true,
    outDir: 'public',
  },
  server: {
    port: 8888,
  }
})