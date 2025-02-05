"use client"
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
        <div className={styles.faqContainer}>
            <h2 className="text-center">{title}</h2>
            <div className={styles.faqList}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.faqQuestion}><h3>{item.question}</h3></div>
                        {openIndex === index && <div className={styles.faqAnswer}>{item.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
