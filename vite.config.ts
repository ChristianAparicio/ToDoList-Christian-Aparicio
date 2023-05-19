import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, './')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {

        about: resolve(root, 'about', 'index.html'),
       main: resolve(root, 'sign-in', 'index.html'),
        "sign-up": resolve(root, 'sign-up', 'index.html'),
      
      }
    },
    target: 'esnext'
  }
})