import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sistema-flow/",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
})
