import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ekaa.me',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
