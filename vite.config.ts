import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repoName = 'AL-Araby-Oils-E-commerce-Website';

export default defineConfig(({ mode }) => ({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  preview: {
    port: 8080,
  },
}));