"use client";
import { faqData } from './faqData';
import styles from './FullFAQ.module.css';
import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const FullFAQ: FC = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const questionId = searchParams.get('q');
        if (questionId) {
            setOpenQuestion(questionId);
            scrollToQuestion(questionId);
        }
    }, [searchParams]);

    const toggleQuestion = (id: string) => {
        setOpenQuestion(prev => (prev === id ? null : id));
    };

    const scrollToQuestion = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const filteredFaqs = faqData.filter(({ question, answer }) =>
        question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.faqContainer}>
            <h1>FAQ</h1>
            <input
                type="text"
                placeholder="Поиск по вопросам и ответам..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredFaqs.map(({ id, question, answer, link, example }) => (
                <div key={id} id={id} className={styles.faqItem}>
                    <button
                        className={`${styles.question} ${openQuestion === id ? styles.active : ''}`}
                        onClick={() => toggleQuestion(id)}
                    >
                        {question}
                    </button>
                    {openQuestion === id && (
                        <p className={styles.answer}>
                            {answer}{" "}
                            {link && (
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.text}
                                </a>
                            )}
                            {example && (
                                <div className={styles.example}>
                                    <strong>{example.text}:</strong> {example.value}
                                </div>
                            )}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FullFAQ;
