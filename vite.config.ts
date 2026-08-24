import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate'
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
    }),
  ],
});
