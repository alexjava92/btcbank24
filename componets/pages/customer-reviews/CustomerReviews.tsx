'use client';

import React, { useState } from 'react';
import styles from './CustomerReviews.module.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
    id: number;
    author: string;
    rating: number;
    text: string;

}

interface CustomerReviewsProps {
    reviews: Review[];
    title?: string;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews, title = 'Отзывы клиентов' }) => {
    const [currentColumn, setCurrentColumn] = useState(0);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`${styles.star} ${index < rating ? styles.filled : ''}`}
            />
        ));
    };

    const renderReviewCard = (review: Review) => (
        <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
                <span className={styles.author}>{review.author}</span>
                <div className={styles.rating}>{renderStars(review.rating)}</div>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
        </div>
    );

    const renderDesktopView = () => (
        <div className={styles.desktopColumns}>
            {[0, 1, 2].map((columnIndex) => (
                <div key={columnIndex} className={styles.column}>
                    {reviews.slice(columnIndex * 3, columnIndex * 3 + 3).map(renderReviewCard)}
                </div>
            ))}
        </div>
    );

    const renderMobileView = () => (
        <div className={styles.mobileColumn}>
            {reviews.slice(currentColumn * 3, currentColumn * 3 + 3).map(renderReviewCard)}
            <div className={styles.mobileNavigation}>
                <button
                    className={styles.navButton}
                    onClick={() => setCurrentColumn((prev) => (prev > 0 ? prev - 1 : 2))}
                    aria-label="Предыдущий столбец отзывов"
                >
                    <ChevronLeft />
                </button>
                <button
                    className={styles.navButton}
                    onClick={() => setCurrentColumn((prev) => (prev < 2 ? prev + 1 : 0))}
                    aria-label="Следующий столбец отзывов"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );

    return (
        <section className={styles.reviewsContainer}>
            <h2 className={styles.reviewsTitle}>{title}</h2>
            <div className={styles.reviewsList}>
                {renderDesktopView()}
                {renderMobileView()}
            </div>
        </section>
    );
};

export default CustomerReviews;
