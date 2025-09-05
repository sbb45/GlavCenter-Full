import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script"; // 👈 добавили
import "../styles/reset.css";
import Header from "@/components/controlls/Header";
import Footer from "@/components/controlls/Footer";
import ModalProvider from "@/providers/ModalProvider";
import StartupLoading from "@/providers/LoadingProvider";
import Modal from "@/components/other/Modal";

const RobotoFont = Roboto({
    variable: "--font-roboto",
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "ГлавЦентр",
    description:
        "ГлавЦентр — услуги по банкротству физических лиц. Мы помогаем списывать долги, сохранять имущество и решать финансовые проблемы. Более 20 000 счастливых клиентов.",
    creator: "ГлавЦентр",
    metadataBase: new URL("https://glavcentr.ru"),
    publisher: "ГлавЦентр",
    keywords:
        "банкротство, физические лица, долги, списание долгов, юридические услуги, помощь в банкротстве, финансовые проблемы, юристы",
    openGraph: {
        title: "ГлавЦентр",
        description:
            "ГлавЦентр — услуги по банкротству физических лиц. Мы помогаем списывать долги, сохранять имущество и решать финансовые проблемы. Более 20 000 счастливых клиентов.",
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
        description:
            "ГлавЦентр — услуги по банкротству физических лиц. Мы помогаем списывать долги, сохранять имущество и решать финансовые проблемы. Более 20 000 счастливых клиентов.",
        images: "/favicon/web-app-manifest-512x512.png",
    },
};

import { fetchKeystoneSafe } from "@/lib/keystone";
import { DEFAULT_HEADER, DEFAULT_FOOTER } from "@/lib/defaultData";
import CookieConsentProvider from "@/providers/CookieConsentProvider";
import StyledComponentsRegistry from "@/lib/styledComponentsRegistry";

async function fetchInformation() {
    const query = `
    query Information {
      component(where: { slug: "information" }) {
        content
      }
    }
  `;

    const result = await fetchKeystoneSafe(
        query,
        { component: { content: { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER } } },
        undefined,
        { cache: "no-store" }
    );

    return result.component;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const info = await fetchInformation();

    return (
        <html lang="ru">
        <body className={RobotoFont.variable}>
        <StyledComponentsRegistry>
            <ModalProvider>
                <CookieConsentProvider>
                    <StartupLoading />
                    <Header info={info?.content?.header} />
                    {children}
                    <Footer info={info?.content?.footer} />
                    <Modal />
                </CookieConsentProvider>
            </ModalProvider>
        </StyledComponentsRegistry>

        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
            {`
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104008354', 'ym');

    ym(104008354, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `}
        </Script>
        <noscript>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/104008354"
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                />
            </div>
        </noscript>
        </body>
        </html>
    );
}
