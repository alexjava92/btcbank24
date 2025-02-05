import React from 'react';
import styles from './CustomContentBlockH2H3.module.css';

interface Item {
    icon: React.ReactNode;
    subtitle: string;
    text: string;
}

interface CustomContentBlockProps {
    title: string;
    descriptions: string;
    items: Item[];
}

const CustomContentBlockH2H3: React.FC<CustomContentBlockProps> = ({ title,descriptions, items }) => {
    return (
        <section className={styles.container}>
            <h2 className="text-center">{title}</h2>
            <div className={styles.descriptions}>{descriptions}</div>
            <div className={styles.content}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.icon}>{item.icon}</div>
                        <div className={styles.textBlock}>
                            <h3>{item.subtitle}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomContentBlockH2H3;
