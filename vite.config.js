import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

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
    server: {
      watch: {
        usePolling: true,
      },
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
