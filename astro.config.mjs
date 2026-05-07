import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brewio.app',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
