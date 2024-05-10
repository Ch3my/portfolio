import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://ch3my.github.io',
  base: 'portfolio',
  integrations: [tailwind({
    applyBaseStyles: false,
  }), , react()]
});