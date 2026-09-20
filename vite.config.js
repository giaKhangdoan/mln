import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The Three.js flag is intentionally lazy-loaded and remains a separate vendor chunk.
    // Keep the warning meaningful for the initial application bundle.
    chunkSizeWarningLimit: 600,
  },
})
