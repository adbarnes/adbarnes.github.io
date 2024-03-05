import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://adbarnes.github.io/",
  base: "/portfolio2024",
  integrations: [react()],
});
