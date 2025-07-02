import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const envars = loadEnv(mode, process.cwd(), '')
  const serverURL = new URL(envars.VITE_SERVER_URL ?? '<http://localhost:3001>')
  const serverAPIPath = envars.VITE_SERVER_API_PATH ?? './api'

  return {
    envDir: './',
    define: {
      __API_PATH__: JSON.stringify(serverAPIPath),
    },
    plugins: [vue(), vueJsx(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
      proxy: {
        [serverAPIPath]: serverURL.origin,
      },
    },
  }
})
