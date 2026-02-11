import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Use /atl/ only when building for GitHub Pages (CI sets this). Locally use / so dev and preview work.
const base = process.env.BUILD_FOR_GH_PAGES === 'true' ? '/atl/' : '/'

// Force application/javascript for .jsx so browsers accept module scripts (fixes "text/jsx" MIME error)
function fixJsxMimePlugin() {
  return {
    name: 'fix-jsx-mime',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const setHeader = res.setHeader.bind(res)
        res.setHeader = (name, ...args) => {
          if (String(name).toLowerCase() === 'content-type' && args[0]?.includes('jsx')) {
            args[0] = 'application/javascript'
          }
          return setHeader(name, ...args)
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [fixJsxMimePlugin(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
