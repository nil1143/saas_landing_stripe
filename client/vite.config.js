import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    proxy: {
      "/subscribe": {
        target: "https://sass-landing-stripe-backend.onrender.com",
      },
    },
  },
});
