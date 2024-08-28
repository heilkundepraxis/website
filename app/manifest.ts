import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
    name: 'Heilkundepraxis Elfriede Steil-Schächinger',
    short_name: 'Heilkundepraxis Steil',
    description: 'Praxis für Naturheilkunde und Physiotherapie in Unterwössen und Umgebung.',
    start_url: '/',
    display: 'standalone',
    icons: [
        {
            src: '/favicon.ico',
            sizes: '48x48',
            type: 'image/x-icon',
        },
    ],
});

export default manifest;
