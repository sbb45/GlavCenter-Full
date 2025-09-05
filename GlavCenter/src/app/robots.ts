import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const host = 'https://glavcentr.ru';
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/'],
        },
        sitemap: [`${host}/sitemap.xml`],
        host,
    };
}


