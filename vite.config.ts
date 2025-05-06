import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][ext]'
      }
    }
  },
  publicDir: 'public'
});