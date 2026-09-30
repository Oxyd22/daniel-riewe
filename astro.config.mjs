// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://daniel-riewe.pages.dev',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
