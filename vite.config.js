import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        format: "iife",
        manualChunks: undefined,
        entryFileNames: "vue-components.js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  plugins: [vue({ 
    template: {
      compilerOptions : {
          isCustomElement: (tag) => tag.includes('-')
      }
    },
    features: { customElement: true } })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3100,
    open: true,
  },
});
