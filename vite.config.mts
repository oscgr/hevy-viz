import { fileURLToPath, URL } from 'node:url'
// Plugins
import Vue from '@vitejs/plugin-vue'
import Fonts from 'unplugin-fonts/vite'

// Utilities
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(),
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      styles: {
        configFile: 'src/styles/settings.scss',
      },

    }),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Oswald',
            weights: [200, 300, 400, 500, 600, 700],
            styles: ['normal'],
          },
          {
            name: 'Fugaz One',
            weights: [400],
            styles: ['normal'],
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['vuetify'],
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3535,
  },
})
