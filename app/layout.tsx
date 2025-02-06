import { ReactNode } from "react";
import Script from "next/script";
import Wrapper from "@/app/Wrapper";

export const metadata = {
    other: {
        "yandex-verification": "9952fac48f824039",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            {/* Подключаем скрипт Яндекс.Метрики после того, как страница станет интерактивной */}
            <Script id="yandex-metrika" strategy="afterInteractive">
                {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){ (m[i].a=m[i].a||[]).push(arguments) };
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k = e.createElement(t),
              a = e.getElementsByTagName(t)[0],
              k.async = 1,
              k.src = r,
              a.parentNode.insertBefore(k, a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(99657688, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
          `}
            </Script>
        </head>
        <body>
        {/* Блок для пользователей с отключённым JavaScript */}
        <noscript>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/99657688"
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                />
            </div>
        </noscript>
        <Wrapper>{children}</Wrapper>
        </body>
        </html>
    );
}
