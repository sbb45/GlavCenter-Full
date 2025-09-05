import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

async function getBaseUrl() {
    const h: any = await (headers() as any);
    const host = h.get('x-forwarded-host') || h.get('host') || '';
    const proto = h.get('x-forwarded-proto') || 'https';
    if (!host) return 'https://glavcentr.ru';
    return `${proto}://${host}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = await getBaseUrl();

    const staticPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/contacts`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
        { url: `${baseUrl}/thanks`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    ];

    // Fetch posts to include dynamic blog URLs
    let postEntries: MetadataRoute.Sitemap = [];
    try {
        const res = await fetch(`${baseUrl}/api/posts/get`, { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            const posts = (data?.posts || []) as Array<{ id: string; updatedAt?: string }>;
            postEntries = posts.map((p) => ({
                url: `${baseUrl}/blog/${p.id}`,
                lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
            }));
        }
    } catch (_) {
        // Ignore errors, return static pages only
    }

    return [...staticPages, ...postEntries];
}


