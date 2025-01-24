import React from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
