import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = globalThis.process?.env?.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserOrOrgSite = repoName.endsWith('.github.io')
const base = globalThis.process?.env?.GITHUB_ACTIONS
  ? (isUserOrOrgSite ? '/' : `/${repoName}/`)
  : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
