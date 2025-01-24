'use client';

import React from "react";
import styles from "./CallToAction.module.css";
import Button from "@/componets/pages/button/Button";


type CallToActionProps = {
    heading: string;
    text: string;
    subText?: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
    imageAlt?: string;
};

const CallToAction: React.FC<CallToActionProps> = ({
                                                       heading,
                                                       text,
                                                       subText,
                                                       buttonText,
                                                       buttonLink,
                                                       imageSrc,
                                                       imageAlt = "Illustration",
                                                   }) => {
    return (
        <div className={styles.callToAction}>
            <div className={styles.content}>
                <h3 className={styles.heading}>{heading}</h3>
                <p className={styles.text}>{text}</p>
                {subText && <p className={styles.subText}>{subText}</p>}
                <Button
                    size="large"
                    variant="primary"
                    onClick={() => window.location.href = buttonLink}
                >
                    {buttonText}
                </Button>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageSrc} alt={imageAlt} />
            </div>
        </div>
    );
};

export default CallToAction;
