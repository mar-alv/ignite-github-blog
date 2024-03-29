import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@contexts': path.resolve(__dirname, './src/contexts/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
      '@libs': path.resolve(__dirname, './src/libs/'),
      '@mappers': path.resolve(__dirname, './src/mappers/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
    },
  },
})
