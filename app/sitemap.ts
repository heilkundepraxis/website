import type { MetadataRoute } from 'next';

import { WEB_HOST } from '@app/config';

export const dynamic = 'force-dynamic';

const modified = new Date();

const sitemap = async () => {
  const sitemap: MetadataRoute.Sitemap = [];

  ([
    { page: '', freq: 'weekly', priority: 1 },
    // legal
    { page: '/impressum', freq: 'monthly', priority: 0.3 },
    { page: '/datenschutz', freq: 'monthly', priority: 0.3 },
  ] as { page: string; freq: 'weekly' | 'monthly', priority: number }[])
    .forEach(({ page, freq, priority }) => {
      sitemap.push({
        url: `${WEB_HOST}${page}`,
        lastModified: modified,
        changeFrequency: freq,
        priority,
      });
    });

  return sitemap;
};

export default sitemap;
