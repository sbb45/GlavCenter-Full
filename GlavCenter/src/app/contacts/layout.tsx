import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакты | ГлавЦентр',
    description: 'Связаться с ГлавЦентр: консультации по банкротству, телефоны, адрес, форма обратной связи.',
    alternates: { canonical: 'https://glavcentr.ru/contacts' },
    openGraph: {
        title: 'Контакты | ГлавЦентр',
        description: 'Связаться с ГлавЦентр: консультации по банкротству, телефоны, адрес, форма обратной связи.',
        url: 'https://glavcentr.ru/contacts',
        type: 'website',
    },
};

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
    return children;
}


