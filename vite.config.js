import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jerviechronix.github.io/', // Keep '/' if deploying to your main GitHub page (your-username.github.io)
});