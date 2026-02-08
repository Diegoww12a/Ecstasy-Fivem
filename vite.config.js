import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/Ecstasy-Fivem/'
    : '/',
  server: {
    port: 5173,
    open: true
  }
}))
