import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from 'path' // 1. Importe o módulo 'path' do Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: { // 2. Adicione a propriedade 'resolve'
    alias: {
      // 3. Defina o alias: '@' deve apontar para o diretório './src'
      '@': path.resolve(__dirname, './src'), 
    },
  },
})