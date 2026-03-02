import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Menggunakan path relatif agar lebih aman di GitHub Pages
  plugins: [react()],
})
