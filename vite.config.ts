import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "", // The page that is first seen when opening the website

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My Tab App", // My Tab App = Name of App
        short_name: "Tabs", // Tabs = Shortened Name
        scope: "/test/", // test = Repo name
        start_url: "/test/", // test = Repo name
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
    })
  ]
});