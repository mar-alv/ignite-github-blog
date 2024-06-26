import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
      '@libs': path.resolve(__dirname, './src/libs/'),
      '@mappers': path.resolve(__dirname, './src/mappers/'),
      '@mocks': path.resolve(__dirname, './__mocks__/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@utils': path.resolve(__dirname, './src/utils/')
    },
  },
})
