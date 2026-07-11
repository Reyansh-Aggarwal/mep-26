import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    // Force the React entry points so Vite doesn't pre-scan the package's
    // Next.js exports, which pull `next/navigation` and fail to resolve.
    include: [
      '@vercel/speed-insights/react',
      '@vercel/analytics/react',
    ],
  },
})
