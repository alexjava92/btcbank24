import React from 'react';
import styles from './CustomContentBlock.module.css';

interface Item {
    icon: React.ReactNode;
    text: React.ReactNode;
}

interface CustomContentBlockProps {
    title: string;
    items: Item[];
}

const CustomContentBlock: React.FC<CustomContentBlockProps> = ({ title, items }) => {
    return (
        <section className={styles.container}>
            <h2 className="text-center">{title}</h2>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index} className={styles.item}>
                        {item.icon}
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CustomContentBlock;
