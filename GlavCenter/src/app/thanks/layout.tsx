import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Спасибо | ГлавЦентр',
    description: 'Спасибо за обращение! Подарок и инструкции в нашем Telegram-канале.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://glavcentr.ru/thanks' },
};

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
    return children;
}


