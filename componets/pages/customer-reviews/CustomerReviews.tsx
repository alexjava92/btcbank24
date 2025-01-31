'use client';

import React, { useState, useEffect } from 'react';
import styles from './CustomerReviews.module.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from './reviews';

const CustomerReviews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Устанавливаем при загрузке
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const title = 'Отзывы клиентов';
    const description = (
        <>
            Всё ещё сомневаетесь? В нашем <a href="https://t.me/+kV3vKFRPnAA2YzJi" target="_blank" rel="noopener noreferrer" className={styles.link}>Telegram-чате</a> сотни реальных отзывов! Просто вбейте <strong>#отзыв</strong> в поиск и убедитесь сами.
        </>
    );

    const reviewsPerPage = isMobile ? 3 : 9;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const renderStars = (rating: number) => (
        Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`${styles.star} ${index < rating ? styles.filled : ''}`}
            />
        ))
    );

    const renderReviewCard = (review: { id: number; author: string; rating: number; text: string }) => (
        <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
                <span className={styles.author}>{review.author}</span>
                <div className={styles.rating}>{renderStars(review.rating)}</div>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
        </div>
    );

    const getCurrentReviews = () => reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

    return (
        <section className={styles.reviewsContainer}>
            <h2 className={styles.reviewsTitle}>{title}</h2>
            <p className={styles.reviewsDescription}>{description}</p>

            <div className={isMobile ? styles.mobileColumn : styles.desktopColumns}>
                {isMobile ? (
                    getCurrentReviews().map(renderReviewCard)
                ) : (
                    Array.from({ length: 3 }, (_, columnIndex) => (
                        <div key={columnIndex} className={styles.column}>
                            {getCurrentReviews().slice(columnIndex * 3, columnIndex * 3 + 3).map(renderReviewCard)}
                        </div>
                    ))
                )}
            </div>

            <div className={styles.pagination}>
                <button
                    className={styles.navButton}
                    onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
                    aria-label="Предыдущая страница"
                >
                    <ChevronLeft />
                </button>
                <span className={styles.pageIndicator}>
                    {currentPage + 1} / {totalPages}
                </span>
                <button
                    className={styles.navButton}
                    onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
                    aria-label="Следующая страница"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default CustomerReviews;
