"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ArticleCard.module.css";

interface Article {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
    tags: string[];
}

interface ArticleCardProps {
    article: Article;
    onHashtagClick: (hashtag: string) => void;
    selectedHashtag?: string | null;
}

const ArticleCard = ({article, onHashtagClick, selectedHashtag}: ArticleCardProps) => {
    const {title, description, image, slug, tags} = article;

    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className={styles.image}
                    priority
                />

                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`${styles.tag} ${selectedHashtag === tag ? styles.active : ""}`}
                            onClick={() => onHashtagClick(tag)}
                        >
    #{tag}
</span>

                    ))}
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <Link href={`/blog/${slug}`} className={styles.link}>
                    Читать статью
                </Link>
            </div>
        </article>
    );
};

export default ArticleCard;
