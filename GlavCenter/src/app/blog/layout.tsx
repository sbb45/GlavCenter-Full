import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Блог | ГлавЦентр Банкротство',
    description: 'Полезные статьи о банкротстве физлиц, списании долгов и защите имущества.',
    alternates: { canonical: 'https://glavcentr.ru/blog' },
    openGraph: {
        title: 'Блог | ГлавЦентр Банкротство',
        description: 'Полезные статьи о банкротстве физлиц, списании долгов и защите имущества.',
        url: 'https://glavcentr.ru/blog',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Блог | ГлавЦентр Банкротство',
        description: 'Полезные статьи о банкротстве физлиц, списании долгов и защите имущества.',
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}


