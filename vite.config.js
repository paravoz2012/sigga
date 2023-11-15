import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sigga/",
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Sigga",
        short_name: "Sigga",
        description: "No sigga",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#ffffffde",
        background_color: "#151327",
        display: "standalone",
        scope: "/",
        start_url: "/sigga/",
        orientation: "portrait",
      },
    }),
  ],
});
