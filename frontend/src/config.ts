import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export const API_URL =
  import.meta.env.MODE === 'development'
    ? 'https://investiq-c9p9.onrender.com/api'
    : 'https://investiq-c9p9.onrender.com/api';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

