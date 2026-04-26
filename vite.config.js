import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For user/organization GitHub Pages sites, base should be '/'
// For project sites, base should be '/{repo-name}/'
const base = process.env.GITHUB_ACTIONS ? '/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
