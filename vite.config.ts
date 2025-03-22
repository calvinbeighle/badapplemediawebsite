import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (!name) return 'assets/[name].[hash][extname]';
          
          // Keep the original path for files in lovable-uploads
          if (name.includes('lovable-uploads/')) {
            return name;
          }
          
          // Process other assets normally
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  }
}));
