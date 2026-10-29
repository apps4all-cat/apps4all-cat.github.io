// @ts-check
import { defineConfig } from 'astro/config';

// Quan hi hagi domini propi, es canvia `site` i s'afegeix public/CNAME.
export default defineConfig({
  site: 'https://apps4all-cat.github.io',
  trailingSlash: 'always',
});
