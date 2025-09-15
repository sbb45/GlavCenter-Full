import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Бесплатный видео-урок | ГлавЦентр',
    description: 'Бесплатный видео-урок 11 минут о том, что делать, когда стало невозможным платить долги за кредиты',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://glavcentr.ru/video-urok-besplatno' },
};

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
    return children;
}


