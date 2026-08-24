import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['assets/favicon.ico'],
      manifest: {
      name: 'ぷちメモ',
      short_name: 'petit_memo',
      description: 'k-ash app',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'assets/192_petit_memo.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'assets/512_petit_memo.png',
          sizes: '512x512',
          type: 'image/png'
       }
      ]
    }
  })
  ]
});
