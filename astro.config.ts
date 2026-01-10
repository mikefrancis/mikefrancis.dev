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
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: "security-headers",
        configureServer(server) {
          server.middlewares.use((_req, res, next) => {
            res.setHeader(
              "Content-Security-Policy",
              "default-src 'self'; frame-src 'self' vercel.live; script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live vitals.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src * blob: data:; media-src 'none'; connect-src *; font-src 'self'"
            );
            res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
            res.setHeader("X-Frame-Options", "DENY");
            res.setHeader("X-Content-Type-Options", "nosniff");
            res.setHeader("X-DNS-Prefetch-Control", "on");
            res.setHeader(
              "Strict-Transport-Security",
              "max-age=31536000; includeSubDomains; preload"
            );
            res.setHeader(
              "Permissions-Policy",
              "camera=(), microphone=(), geolocation=()"
            );
            next();
          });
        },
      },
    ],
  },
});
