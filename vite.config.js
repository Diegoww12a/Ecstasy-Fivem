import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Ecstasy-Fivem/',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173,
    open: true
  }
})
