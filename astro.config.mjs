import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
import tailwindcss from "@tailwindcss/vite";


import react from "@astrojs/react";

// https://astro.build/config
// Parece que al ser un sitio statico los i18n no se ejecutan
export default defineConfig({
  site: 'https://ch3my.github.io',
  base: 'portfolio',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    prefixDefaultLocale: true,
    defaultLocale: "es",
    locales: ["es", "en"]
  }
});