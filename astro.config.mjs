import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://amritesh.github.io',
  base: process.env.BASE_PATH || '/hireorbits-website',
  trailingSlash: 'always',
  output: 'static',
});
