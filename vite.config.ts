import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shortit/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "root": resolve(__dirname, "."),
    }
  }
})
