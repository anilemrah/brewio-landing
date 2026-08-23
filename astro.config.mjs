import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves directory-style output only at the trailing-slash URL and
// 301-redirects the bare path, so canonicals and sitemap entries must carry the slash.
export default defineConfig({
  site: 'https://brewio.app',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
});
