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
  build: {
    // Raise the warning threshold slightly — chunks are split intentionally below.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // react-pdf is only used on the Brochure page — isolate it entirely.
          if (id.includes('react-pdf') || id.includes('pdfjs-dist')) {
            return 'vendor-pdf';
          }
          // GSAP is large but shared across almost every page.
          if (id.includes('gsap')) {
            return 'vendor-gsap';
          }
          // FontAwesome icon packs are large; keep them out of the main chunk.
          if (
            id.includes('@fortawesome') ||
            id.includes('font-awesome') ||
            id.includes('react-fontawesome')
          ) {
            return 'vendor-icons';
          }
          // Vercel analytics / speed insights.
          if (id.includes('@vercel')) {
            return 'vendor-vercel';
          }
          // Everything else in node_modules goes into a single shared vendor chunk.
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
