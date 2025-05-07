import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   // host: '0.0.0.0',
  //   host: true,
  //   allowedHosts: [
  //     'a62b-179-214-69-136.ngrok-free.app'
  //   ],
  //   https: {
  //     key: readFileSync('./cert/localhost.key'),
  //     cert: readFileSync('./cert/localhost.crt'),
  //   },
  // },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png',
        'maskable_icon.png',
      ],
      manifest: {
        "name": "Leitor de Produto",
        "short_name": "Leitor de Produto",
        "icons": [
          {
            "src": "/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
        "start_url": "/",
        "scope": "/",
        "display": "standalone",
        "background_color": "#FFFFFF",
        "theme_color": "#4608AD",
        "orientation": "portrait",
        "description": "Leitor de produto.",
      },
    }),
  ],
});
