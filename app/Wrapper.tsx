"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import styles from "./Layout.module.css";
import Header from "@/componets/header/Header";
import Footer from "@/componets/footer/Footer";

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className={styles.layoutWrapper}>
                <Header />
                <div className={styles.gridBackground} />
                <main className={styles.contentWrapper}>{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
