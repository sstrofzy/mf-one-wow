import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'auth-app',

      filename: 'auth-app.js',
      exposes: {
        './': './src/App.tsx',
        '': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      }
    })
  ],
  build: {
    target: "ES2022"
  },
  server: {
    cors: true,
    port: 3001,
    watch: {
      usePolling: true
    }
  }
})
