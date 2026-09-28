// Build-time entry: scripts/prerender.js renders these to static HTML so content exists before JS runs.
import { renderToString } from 'react-dom/server'
import App from './App'
import { NotFound } from './NotFound'

export const renderApp = () => renderToString(<App />)
export const renderNotFound = () => renderToString(<NotFound />)
