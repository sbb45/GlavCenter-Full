import { Metadata } from 'next';
import { headers } from 'next/headers';
import ClientPost from './ClientPost';

type Params = { slug: string };

async function getBaseUrl() {
    const h: any = await (headers() as any);
    const host = h.get('x-forwarded-host') || h.get('host') || '';
    const proto = h.get('x-forwarded-proto') || 'http';
    if (!host) return '';
    return `${proto}://${host}`;
}

async function fetchPost(slug: string) {
    const baseUrl = await getBaseUrl();
    const url = baseUrl ? `${baseUrl}/api/posts/get-one?id=${slug}` : `/api/posts/get-one?id=${slug}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
                const data = await res.json();
    return data?.post || null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const post = await fetchPost(params.slug);
    const baseUrl = await getBaseUrl();
    const url = baseUrl ? `${baseUrl}/blog/${params.slug}` : undefined;
    const title = post?.title ? `${post.title} | ГлавЦентр Банкротство` : 'Статья | ГлавЦентр Банкротство';
    const description = post?.description || 'Юридическая помощь по банкротству физлиц и ИП. Бесплатная консультация.';
    const ogImage = post?.image?.url ? `http://localhost:4000${post.image.url}` : '/logo.svg';

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'article',
            images: ogImage ? [{ url: ogImage }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ogImage ? [ogImage] : undefined,
        },
    };
}

export default async function Page({ params }: { params: Params }) {
    const post = await fetchPost(params.slug);
    const baseUrl = await getBaseUrl();
    const url = baseUrl ? `${baseUrl}/blog/${params.slug}` : '';
    const jsonLd = post ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: post.author?.name ? { '@type': 'Person', name: post.author.name } : undefined,
        datePublished: post.createdAt ? new Date(post.createdAt).toISOString() : undefined,
        image: post.image?.url ? `http://localhost:4000${post.image.url}` : undefined,
        mainEntityOfPage: url || undefined,
    } : null;

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <ClientPost id={params.slug} />
        </>
    );
}
