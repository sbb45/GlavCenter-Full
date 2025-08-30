import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/reset.css";
import Header from "@/components/controlls/Header";
import Footer from "@/components/controlls/Footer";
import ModalProvider from "@/providers/ModalProvider";
import Modal from "@/components/other/Modal";

const RobotoFont = Roboto({
    variable: "--font-roboto",
    subsets: ["latin", "cyrillic"],
    weight: ["300","400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "ГлавЦентр",
    description: "ГлавЦентр — услуги по банкротству физических лиц. Мы помогаем списывать долги, сохранять имущество и решать финансовые проблемы. Более 20 000 счастливых клиентов.",
    creator: "ГлавЦентр",
    publisher: "ГлавЦентр",
    keywords: "банкротство, физические лица, долги, списание долгов, юридические услуги, помощь в банкротстве, финансовые проблемы, юристы",
    openGraph: {
        title: "ГлавЦентр",
        description: "ГлавЦентр — услуги по банкротству физических лиц. Мы помогаем списывать долги, сохранять имущество и решать финансовые проблемы. Более 20 000 счастливых клиентов.",
        url: "https://glavcenter.ru",
        siteName: "ГлавЦентр",
        images: [
            {
                url: "/favicon/web-app-manifest-512x512.png",
                width: 1200,
                height: 630,
                alt: "ГлавЦентр",
            },
        ],
        type: "website",
    },
    icons: {
        icon: [
            { url: "/favicon/favicon.ico", sizes: "any" },
            { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
            { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192" },
            { url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ГлавЦентр",
        description: "ГлавЦентр — услуги по банкротству физических лиц. Мы помогаем списывать долги, сохранять имущество и решать финансовые проблемы. Более 20 000 счастливых клиентов.",
        images: "/favicon/web-app-manifest-512x512.png",
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={RobotoFont.variable}>
        <ModalProvider>
            <Header />
            {children}
            <Footer />
            <Modal />
        </ModalProvider>
        </body>
        </html>
    );
}
