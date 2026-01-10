import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
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
  experimental: {
    csp: {
      styleDirective: {
        resources: ["'self'", "'unsafe-inline'"],
      },
      scriptDirective: {
        resources: [
          "'self'",
          "'unsafe-eval'",
          "'unsafe-inline'",
          "vercel.live",
          "vitals.vercel-insights.com",
        ],
      },
      directives: [
        "default-src 'self'",
        "frame-src 'self' vercel.live",
        "img-src * blob: data:",
        "media-src 'none'",
        "connect-src *",
        "font-src 'self'",
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
