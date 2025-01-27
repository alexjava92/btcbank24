import { ReactNode } from "react";
import Wrapper from "@/app/Wrapper";


export const metadata = {
    other: {
        "yandex-verification": "9952fac48f824039",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <noscript>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/99657688"
                    style={{ position: 'absolute', left: '-9999px' }}
                    alt=""
                />
            </div>
        </noscript>
        <Wrapper>{children}</Wrapper>
        </body>
        </html>
    );
}
