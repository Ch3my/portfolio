import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// Check if the build is running inside a GitHub Action
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://ch3my.github.io',
// If it's GitHub, use 'portfolio'. If it's Cloudflare, leave it blank (root).
  base: isGitHubPages ? 'portfolio' : undefined,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    },
    fallback: {
      en: 'es',
    }
  },
});