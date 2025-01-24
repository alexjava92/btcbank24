'use client';

import React from "react";
import { PhoneFrame } from "@/componets/phone-frame/PhoneFrame";
import Button from "@/componets/pages/button/Button";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
    title: React.ReactNode;
    subtitle: string;
    buttonText: string;
    buttonUrl: string;
    imageSrc: string;
    imageAlt: string;
};

export default function HeroSection({
                                        title,
                                        subtitle,
                                        buttonText,
                                        buttonUrl,
                                        imageSrc,
                                        imageAlt,
                                    }: HeroSectionProps) {
    return (
        <section className={styles.heroSectionWrapper}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>
                    {title}
                </h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <Button
                    onClick={() => window.open(buttonUrl, "_blank")}
                    variant="primary"
                    size="large"
                >
                    {buttonText}
                </Button>
            </div>
            <PhoneFrame imageAlt={imageAlt} imageSrc={imageSrc} />
        </section>
    );
}
