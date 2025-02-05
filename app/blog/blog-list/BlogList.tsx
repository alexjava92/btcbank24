"use client";

import { useState, useMemo } from "react";
import ArticleCard from "../article-card/ArticleCard";
import styles from "./BlogList.module.css";
import { articles } from "@/data/articles";
import SeoSchema from "@/app/utils/seo/SeoSchema";
import SearchBar from "@/componets/blog/search-bar/SearchBar";
import HashtagList from "@/componets/blog/hashtag-list/HashtagList";


const BlogList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);

    const handleSearch = (query: string) => {
        setSearchQuery(query.toLowerCase());
        setSelectedHashtag(null);
    };

    const handleHashtagClick = (hashtag: string) => {
        setSelectedHashtag(prev => (prev === hashtag ? null : hashtag));
        setSearchQuery("");
    };

    const allHashtags = useMemo(() =>
        Array.from(new Set(articles.flatMap(article => article.tags))), [articles]
    );

    const filteredArticles = useMemo(() =>
        articles.filter(article =>
            selectedHashtag
                ? article.tags.includes(selectedHashtag)
                : article.title.toLowerCase().includes(searchQuery) ||
                article.description.toLowerCase().includes(searchQuery)
        ), [searchQuery, selectedHashtag]
    );

    return (
        <div className={styles.container}>

            <div className={styles.searchBarContainer}>
                <SearchBar onSearch={handleSearch} placeholder="Поиск статей..." />
            </div>

            <HashtagList
                hashtags={allHashtags}
                onHashtagClick={handleHashtagClick}
                selectedHashtag={selectedHashtag}
            />

            <div className={styles.articlesContainer}>
                {filteredArticles.map(article => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        onHashtagClick={handleHashtagClick}
                        selectedHashtag={selectedHashtag}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
