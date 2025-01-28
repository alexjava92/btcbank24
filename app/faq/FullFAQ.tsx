"use client";
import { faqData } from './faqData';
import styles from './FullFAQ.module.css';
import React, { FC, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const FullFAQ: FC = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true); // Флаг для отслеживания первого рендера

    useEffect(() => {
        const questionId = searchParams.get('q');
        if (questionId && isInitialLoad) {
            setOpenQuestion(questionId);
            scrollToQuestion(questionId); // Прокрутка только при первой загрузке
            setIsInitialLoad(false); // Отключаем флаг после первой загрузки
        }
    }, [searchParams, isInitialLoad]);

    const toggleQuestion = (id: string) => {
        if (openQuestion === id) {
            setOpenQuestion(null);
            router.push('/faq'); // Убираем параметр из URL
        } else {
            setOpenQuestion(id);
            router.push(`/faq?q=${id}`, { scroll: false }); // Обновляем URL без прокрутки
        }
    };

    const scrollToQuestion = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Применяем класс scroll перед прокруткой
            element.classList.add('scroll');
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Удаляем класс scroll после прокрутки (на всякий случай, чтобы избежать накопления классов)
            setTimeout(() => {
                element.classList.remove('scroll');
            }, 300); // Время снятия класса (можно подкорректировать)
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
                        <div className={styles.answer}>
                            <p>
                                {answer}{" "}
                                {link && (
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.text}
                                    </a>
                                )}
                            </p>
                            {example && (
                                <div className={styles.example}>
                                    <strong>{example.text}:</strong> {example.value}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FullFAQ;
