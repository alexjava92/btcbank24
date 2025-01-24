import React from "react";
import styles from './HowItWorksBlock.module.css';
import { FaTelegramPlane, FaExchangeAlt, FaStepForward, FaSmile } from 'react-icons/fa';

interface Step {
    icon: React.ReactNode;
    text: string;
}

interface HowItWorksBlockProps {
    title: string;
    steps: Step[];
}

const HowItWorksBlock: React.FC<HowItWorksBlockProps> = ({ title, steps }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>{title}</h2>
            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <div className={styles.step} key={index}>
                        <div className={styles.icon}>{step.icon}</div>
                        <p>{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorksBlock;
