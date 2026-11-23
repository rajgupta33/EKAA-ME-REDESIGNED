import type { APIRoute } from 'astro';
import { EKAA_SITE } from '../data/site';
import { RADIANCE_SERVICES } from '../data/services';
import { INSIGHT_ARTICLES } from '../data/insights';

export const GET: APIRoute = () => {
  const staticPaths = [
    '/',
    '/radiance/',
    '/mehak-marwaha/',
    '/ekaa-family/',
    '/insights/',
    '/book/',
    '/contact/',
    '/privacy-policy/',
    '/terms/',
  ];

  const servicePaths = RADIANCE_SERVICES.map((s) => `/radiance/${s.slug}/`);
  const insightPaths = INSIGHT_ARTICLES.map((a) => `/insights/${a.slug}/`);
  const allPaths = [...staticPaths, ...servicePaths, ...insightPaths];

  const today = new Date().toISOString().split('T')[0];

  const urls = allPaths
    .map(
      (path) => `  <url>
    <loc>${EKAA_SITE.siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
