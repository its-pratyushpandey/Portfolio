import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': [
            'react-icons/fa',
            'react-icons/si',
            '@heroicons/react/24/outline'
          ]
        }
      }
    }
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  }
});
