'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = 'Часто задаваемые вопросы' }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`${styles.faqContainer} container`}>
            <h2 className="text-center">{title}</h2>
            <div className={styles.faqList}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.faqQuestion}>{item.question}</div>
                        <div className={styles.faqAnswer} style={{ display: openIndex === index ? 'block' : 'none' }}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
