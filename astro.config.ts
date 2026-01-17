import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  csp: true,
  redirects: {
    "/cv":
      "https://docs.google.com/document/d/1t88b1bcL0TBoAhhCyjOnRHk2c762w6huPU5-WHisOCc",
  },
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
