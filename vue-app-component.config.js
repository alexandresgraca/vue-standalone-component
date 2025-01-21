import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        VueAppComponent: "src/vue-app-component.js",
      },
      output: {
        inlineDynamicImports: true,
        format: "es",
        manualChunks: false,
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
      features: { customElement: true },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
