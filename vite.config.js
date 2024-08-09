import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
