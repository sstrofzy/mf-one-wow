/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { federation } from '@module-federation/vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/microfrontend-workspace',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'microfrontendWorkspace',
      filename: 'remoteEntry.js',
      exposes: {
        './app': './src/app/app.tsx',
        './': './src/app/app.tsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
      },
    }),
  ],
  build: {
    outDir: '../../dist/apps/microfrontend-workspace',
    emptyOutDir: true,
    target: 'es2022',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
