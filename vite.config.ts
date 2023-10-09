import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@libs': path.resolve(__dirname, './src/libs/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
    },
  },
})
