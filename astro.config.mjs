import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fur-sanctuary-web.vercel.app',
  integrations: [preact(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});