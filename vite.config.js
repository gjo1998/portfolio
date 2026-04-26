import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Since your repo name is "portfolio"
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})