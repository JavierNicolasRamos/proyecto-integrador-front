import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `./.env.${mode}` }).parsed;

  let envWithStrings = {};

  if (env) {
    envWithStrings = Object.fromEntries(
      Object.entries(env).map(([key, value]) => [key, JSON.stringify(value)])
    );
  }

  return {
    plugins: [react()],
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 4173,
    },
    define: {
      "import.meta.env": envWithStrings,
    },
  };
});
