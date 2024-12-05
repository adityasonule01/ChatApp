import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      port: 3001,
      proxy: {
        "/api": {
          target: env.VITE_FRONTEND_URL, // Use loaded environment variable
          changeOrigin: true,
        },
      },
    },
  };
});
