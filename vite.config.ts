import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '@server',
        replacement: resolve(__dirname, './server'),
      },
      {
        find: '@public',
        replacement: resolve(__dirname, './public'),
      },
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    /*rollupOptions: {
      output: {
        // Reduce size of asset files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },*/
  },
  server: {
    /*proxy: {
      '/graphql': {
        target: 'http://localhost:5000/graphql',
        changeOrigin: true,
      },
    },*/
    cors: false,
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
});
