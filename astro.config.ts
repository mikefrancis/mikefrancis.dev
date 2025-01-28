import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default {
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
};
