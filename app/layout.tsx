"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import Header from "@/componets/header/Header";
import Footer from "@/componets/footer/Footer";
import styles from "./Layout.module.css";

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className={styles.gridBackground} />
            <main className={styles.contentWrapper}>{children}</main>
        </>
    );
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className={styles.layoutWrapper}>
                <Header />
                <Wrapper>{children}</Wrapper>
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
