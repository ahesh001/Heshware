import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: split out firebase and lucide
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
});
