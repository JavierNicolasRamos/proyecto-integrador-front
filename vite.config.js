import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import path from "path";

export default defineConfig(({ mode }) => {
  let envWithStrings = {};

  if (mode === "development") {
    const env = dotenv.config({ path: `./.env.${mode}` }).parsed;

    if (env) {
      envWithStrings = Object.fromEntries(
        Object.entries(env).map(([key, value]) => [key, JSON.stringify(value)])
      );
    }
  }

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      proxy: {
        "/api": {
          target: "http://localhost:4173",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      cors: true,
      fs: { strict: false },
      hmr: { overlay: false },
      strictSSL: false,
      strictPort: true,
      strictLocal: true,
      host: true,
      port: 4173,
    },
    define: {
      "import.meta.env": envWithStrings,
    },
  };
});
