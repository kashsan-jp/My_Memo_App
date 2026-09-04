import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // devOptions: { enabled: true },
      // manifest: {
      //   name: "ぷちメモ",
      //   icons: [
      //     {
      //       sizes: "192x192",
      //       src: "192_petit_memo.png",
      //       type: "image/png",
      //     },    
      //     {
      //       sizes: "512x512",
      //       src: "512_petit_memo.png",
      //       type: "image/png",
      //     },
      //     {
      //       sizes: "512x512",
      //       src: "512_petit_memo.png",
      //       type: "image/png",
      //       purpose: "maskable",
      //     },
      //   ],
      // },

      registerType: 'autoUpdate',
      // public ディレクトリを基準とした相対パスで指定します
      includeAssets: ['assets/favicon.png', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        description: 'React Vite PWA Application',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/favicon.ico', // ここも同様のパスになります
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ]
      }
    }),
  ],
});
