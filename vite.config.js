import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { APP_BASE } from './src/router/routes.config.js'

// https://vite.dev/config/
export default defineConfig({
  // Domino NSF 部署路徑，靜態資源與 Vue Router 會以此為 base
  base: APP_BASE,
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/domino-api': {
        target: 'https://www.xred.com.tw',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/domino-api/, ''),
      },
    },
  },
})
